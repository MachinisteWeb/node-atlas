var website = window.website || {};
website.component = website.component || {};

website.component.Content = function () {
	var publics = this;

	publics.name = "content";

	publics.getAnchor = function () {
        var message = document.getElementsByClassName("download--clone--text")[0],
        	titles = document.querySelectorAll("." + publics.name + " h2, ." + publics.name + " h3");

        Array.prototype.forEach.call(titles, function (title) {    	
	        title.addEventListener("click", function () {
	            window.prompt(message.getAttribute("data-instruction"), location.href + "#" + title.id);
	        });
        });
    };

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
       				publics.updateContentByClick(website.allInternalLink(".content--inner a"), fragmentPath, urlRelativeSubPath);
       				publics.getAnchor();
       				publics.constructLinks(contentBefore.querySelectorAll("h3"));
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
       				publics.updateContentByClick(website.allInternalLink(".content--inner a"), fragmentPath, urlRelativeSubPath);
			        publics.getAnchor();
        			publics.constructLinks(contentAfter.querySelectorAll("h3"));
       				website.goToHash(contentAfter, e.state.hash);

				    setTimeout(function () {
						contentAfter.classList.remove("is-hidden");
				    }, 0);

					setTimeout(function () {
						contentBefore.parentNode.removeChild(contentBefore);
					}, 1000);
		        });
		    } else if (location.href.split("#")[1]) {
    			website.goToHash(document.getElementsByClassName("content--inner")[0], location.href.split("#")[1]);
	    	} else {
	    		window.history.back();
	    	}
		});
	};

	publics.manageScroll = function () {
	    function isOnBottom (isCallback, notCallback) {
	        var scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
	            windowHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
	            body = document.body,
	            html = document.documentElement,
	            documentHeight = Math.max(
	                body.scrollHeight, body.offsetHeight, 
	                html.clientHeight, html.scrollHeight, html.offsetHeight
	            );
	        if (documentHeight <= windowHeight + scrollTop) {
	            isCallback();
	        } else {
	            notCallback();
	        }
	    }

        function scrollState () {
            var content = document.getElementsByClassName("content--inner")[0];
            isOnBottom(function () {
                content.classList.remove("is-blocked");
            }, function () {
                content.classList.add("is-blocked");
            });
        }

        window.addEventListener("scroll", function () {
            scrollState();
        });
        scrollState();
	};

	publics.constructLinks = function (allH3) {
        var outer = document.querySelector(".content--outer"),
        	ul = document.createElement("ul"),
        	h3 = document.createElement("h3");

        h3.innerHTML = outer.getAttribute("data-name");

    	ul.innerHTML = "";
    	outer.innerHTML = "";

        Array.prototype.forEach.call(allH3, function (h3) {
        	var li =  document.createElement("li"),
        		link = document.createElement("a");

        	link.href = location.href.split("#")[0] + "#" + h3.id;
        	link.innerHTML = h3.innerHTML;
        	li.appendChild(link);
        	ul.appendChild(li);
        });
        if (allH3.length) {
    		outer.appendChild(h3);
        }
    	outer.appendChild(ul);
	};

	publics.init = function (links, fragmentPath, urlRelativeSubPath) {
        publics.manageScroll();
        publics.getAnchor();

		publics.updateContentByClick(links, fragmentPath, urlRelativeSubPath);
		publics.updateContentByHistoryBack(fragmentPath, urlRelativeSubPath);
        publics.constructLinks(document.querySelectorAll(".content--inner h3"));
	};
};