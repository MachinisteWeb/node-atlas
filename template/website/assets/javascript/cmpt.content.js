var website = window.website || {};
website.component = website.component || {};

website.component.Content = function () {
	var publics = this;

	publics.name = "content";

	publics.updateContentByClick = function (links, fragmentPath, urlRelativeSubPath) {
		[].forEach.call(links, function (link) {
			link.addEventListener("click", function (e) {
				var urn = link.getAttribute("href").replace(".html", ""),
					contentAfter = document.getElementsByClassName(publics.name + "--inner")[0],
					contentBefore = document.createElement("div");
				e.preventDefault();

				contentBefore.classList.add(publics.name + "--inner");
				contentBefore.classList.add("is-hidden");
        		contentAfter.parentNode.insertBefore(contentBefore, contentAfter);

				contentAfter.classList.add("is-hidden");

		        website.xhrRequest(fragmentPath + encodeURIComponent(urn) + ".htm", function (err, response) {
		            if (err) {
		            	contentAfter.classList.remove("is-hidden");
		                return website.xhrFallback(urn);
		            }

		    		history.pushState(urn, null, urlRelativeSubPath + "/" + urn + ".html");

				    contentBefore.innerHTML = response;
       				website.highlightCode();		    
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

	publics.updateContentByHistoryBack = function () {
		window.addEventListener("popstate", function (e) {
			var contentBefore = document.getElementsByClassName(publics.name + "--inner")[0],
				contentAfter = document.createElement("div");

		    if (e.state) {
				contentAfter.classList.add(publics.name + "--inner");
				contentAfter.classList.add("is-hidden");
        		contentBefore.parentNode.insertBefore(contentAfter, contentBefore.nextElementSibling);

				contentBefore.classList.add("is-hidden");

		        website.xhrRequest("content/" + encodeURIComponent(e.state) + ".htm", function (err, response) {
		            if (err) {
						contentBefore.classList.remove("is-hidden");
		                return website.xhrFallback(e.state);
		            }

				    contentAfter.innerHTML = response;
        			website.highlightCode();			    
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
		publics.updateContentByHistoryBack();
	};
};