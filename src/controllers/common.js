
/* jshint node: true, esversion: 6 */
exports.setModules = function () {
	var NA = this;

	NA.modules.marked = require("marked");
};

exports.changeVariations = function (next, locals) {
	locals.version = require("../../../node-atlas/package.json").version;

	next();
};

exports.setRoutes = function (next) {
	var NA = this,
		fs = NA.modules.fs,
		jsdom = NA.modules.jsdom,
		async = NA.modules.async,
		marked = NA.modules.marked,
		route = NA.webconfig.routes;

	function toUrl(text) {
		return text.toLowerCase().replace(/\&#39\;|'|\&lt\;|<|\&gt\;|>|\.| |\(|\)|\/|\!|\?|,|\&|\;|\[|\]|\%/g, "-").replace(/-+/g, "-").replace(/^-/g, "").replace(/-$/g, "");
	}

	function toSafeChar(text) {
		return text.replace(/é|è|ê/g, "e").replace(/ô/g, "o").replace(/à/g, "a").replace(/û|ù/g, "u");
	}

	fs.readFile(NA.webconfig._readme, "utf-8", function (err, content) {
		if (err) {
			return next();
		}

		var dom = new jsdom.JSDOM(marked(content.replace(/</g, '&lt;'))),
			allRoutes = [],
			menu,
			key = NA.webconfig._toc;

		Array.prototype.forEach.call(dom.window.document.querySelectorAll('h2, h3'), function (title) {
			title.setAttribute("id", toSafeChar(toUrl(title.textContent)));
		});

		Array.prototype.forEach.call(dom.window.document.getElementsByTagName('table'), function (table) {
			var container = dom.window.document.createElement('div');

			container.classList.add('table');
			table.parentNode.insertBefore(container, table.nextElementSibling);
			container.innerHTML = table.cloneNode(true);
			table.parentNode.removeChild(table);
		});

		Array.prototype.forEach.call(dom.window.document.querySelectorAll('h3[id="' + key + '"]'), function (title) {
			var toc = title.nextElementSibling,
				finalTitle = dom.window.document.createElement('h2');

			finalTitle.innerHTML = title.innerHTML;
			finalTitle.setAttribute("id", "toc");
			title.parentNode.insertBefore(finalTitle, toc);

			toc.classList.add("toc");

			Array.prototype.forEach.call(toc.children, function (sublink) {
				var subtitle = sublink.children[0],
					url = toSafeChar(toUrl(subtitle.textContent)) + ".html";

				subtitle.setAttribute("data-href", subtitle.getAttribute("href"));
				subtitle.setAttribute("href", url);

				Array.prototype.forEach.call(sublink.querySelectorAll('li'), function (sublink) {
					var subtitle = sublink.children[0];

					subtitle.setAttribute("data-href", subtitle.getAttribute("href"));
					subtitle.setAttribute("href", url + "#" + toSafeChar(toUrl(subtitle.textContent)));

					if (toSafeChar(toUrl(subtitle.textContent)) === key) {
						sublink.parentNode.removeChild(sublink);
					}
				});
			});

			menu = function (next) {
				fs.writeFile("assets/" + NA.webconfig._content + "index.htm", finalTitle.outerHTML + toc.outerHTML, function () {
					var base = toc.cloneNode(true);

					toc.parentNode.removeChild(toc);
					finalTitle.parentNode.removeChild(finalTitle);
					title.parentNode.removeChild(title);

					Array.prototype.filter.call(dom.window.document.getElementsByTagName('a'), function (element) {
						return !element.matches("[href^=http]");
					}).forEach(function (needTransform) {
						Array.prototype.forEach.call(base.children, function (subitem) {
							var link = subitem.children[0];

							if (link.getAttribute("data-href") === needTransform.getAttribute("href")) {
								needTransform.setAttribute("href", link.getAttribute("href"));
							}

							Array.prototype.filter.call(subitem.getElementsByTagName("a"), function (sublink, index) {
								return index !== 0;
							}).forEach(function (sublink) {
								if (sublink.getAttribute("data-href") === needTransform.getAttribute("href")) {
									needTransform.setAttribute("href", sublink.getAttribute("href"));
								}
							});
						});
					});

					next();
				});
			};
		});

		function nextUntil(title, selector) {
			var htmlElement = title,
				nextUntil = [],
				until = true;
			while (htmlElement = htmlElement.nextElementSibling) {
				(until && htmlElement && !htmlElement.matches(selector)) ? nextUntil.push(htmlElement) : until = false;
			}
			return nextUntil;
		}

		function prevUntil(title, selector) {
			var htmlElement = title,
				previousUntil = [],
				until = true;
			while (htmlElement = htmlElement.previousElementSibling) {
				(until && htmlElement && !htmlElement.matches(selector)) ? previousUntil.push(htmlElement) : until = false;
			}
			return previousUntil;
		}

		Array.prototype.forEach.call(dom.window.document.getElementsByTagName('h2'), function (title) {
			allRoutes.push(function (nextRoute) {
				var contentAfter = nextUntil(title, "h2"),
					contentBefore = prevUntil(title, "h2"),
					after,
					before,
					divBefore,
					divAfter,
					bottom;

				if (contentAfter.length > 0) {
					after = contentAfter[contentAfter.length - 1].nextElementSibling;
					before = contentBefore[contentBefore.length - 1].previousElementSibling;
					divBefore = (before) ? `<div class="before">
							<a href="${before.getAttribute("id")}.html">◄ ${before.innerHTML}</a>
						</div>` : "";
					divAfter = (after) ? `<div class="after">
							<a href="${after.getAttribute("id")}.html">${after.innerHTML} ►</a>
						</div>` : "";
					bottom = "<div>" + divBefore + divAfter + "</div>";
				}

				if (title.getAttribute("id") && title.getAttribute("id") !== "toc") {


					fs.writeFile("assets/" + NA.webconfig._content + toSafeChar(title.getAttribute("id")) + ".htm", title.outerHTML + contentAfter.map(function (element) { return element.outerHTML; }).join('') + bottom, function () {
						route["/" + toSafeChar(title.getAttribute("id")) + ".html"] = {
							"view": "content.htm",
							"controller": "content.js"
						};

						nextRoute();
					});
				} else {
					nextRoute();
				}
			});
		});

		menu(function () {
			async.parallel(allRoutes, function() {
				next();
			});
		});
	});
};