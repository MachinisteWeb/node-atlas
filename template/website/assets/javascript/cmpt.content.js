var website = window.website || {};
website.component = website.component || {};

website.component.Content = function () {
	var publics = this;

	publics.name = "content";

	publics.updateContentByClick = function (links, fragmentPath, urlRelativeSubPath) {
		[].forEach.call(links, function (link) {
			link.addEventListener("click", function (e) {
				var urn = link.getAttribute("href").replace(".html", "").split("#"),
					url = urn[0],
					hash = (urn[1]) ? decodeURIComponent(urn[1]) : undefined,
					contentAfter = document.getElementsByClassName(publics.name + "--inner")[0],
					contentBefore = document.createElement("div");
				e.preventDefault();

				contentBefore.classList.add(publics.name + "--inner");
				contentBefore.classList.add("is-hidden");
        		contentAfter.parentNode.insertBefore(contentBefore, contentAfter);

				contentAfter.classList.add("is-hidden");

		        website.xhrRequest(fragmentPath + encodeURIComponent(url) + ".htm", function (err, response) {
		            if (err) {
		            	contentAfter.classList.remove("is-hidden");
		                return website.xhrFallback(url + ".html" + ((hash) ? '#' + hash : ''));
		            }

		    		history.pushState({ url: url, hash: hash }, null, urlRelativeSubPath + "/" + url + ".html" + ((hash) ? '#' + hash : ''));

				    contentBefore.innerHTML = response;
				    website.smartTargetInjection();
       				website.highlightCode();
       				publics.updateContentByClick(document.querySelectorAll(".toc a"), fragmentPath, urlRelativeSubPath);
       				website.goToHash(contentBefore, hash);

				    setTimeout(function () {
						contentBefore.classList.remove("is-hidden");
				    }, 0);

					setTimeout(function () {
						contentAfter.parentNode.removeChild(contentAfter);
					}, 1000);
				});
			});
		});
	};

	publics.updateContentByHistoryBack = function (fragmentPath, urlRelativeSubPath) {
		window.addEventListener("popstate", function (e) {
			var contentBeforeTemp = document.getElementsByClassName(publics.name + "--inner"),
				contentBefore = contentBeforeTemp[contentBeforeTemp.length - 1],
				contentAfter = document.createElement("div");

		    if (e.state) {
				contentAfter.classList.add(publics.name + "--inner");
				contentAfter.classList.add("is-hidden");
        		contentBefore.parentNode.insertBefore(contentAfter, contentBefore.nextElementSibling);

				contentBefore.classList.add("is-hidden");

		        website.xhrRequest("content/" + encodeURIComponent(e.state.url) + ".htm", function (err, response) {
		            if (err) {
						contentBefore.classList.remove("is-hidden");
		                return website.xhrFallback(e.state.url);
		            }

				    contentAfter.innerHTML = response;
				    website.smartTargetInjection();
        			website.highlightCode();
       				publics.updateContentByClick(document.querySelectorAll(".toc a"), fragmentPath, urlRelativeSubPath);
       				website.goToHash(contentAfter, e.state.hash);

				    setTimeout(function () {
						contentAfter.classList.remove("is-hidden");
				    }, 0);

					setTimeout(function () {
						contentBefore.parentNode.removeChild(contentBefore);
					}, 1000);
		        });
		    } else {
		        history.back();
		    }
		});
	};

	publics.init = function (links, fragmentPath, urlRelativeSubPath) {
		publics.updateContentByClick(links, fragmentPath, urlRelativeSubPath);
		publics.updateContentByHistoryBack(fragmentPath, urlRelativeSubPath);
	};
};