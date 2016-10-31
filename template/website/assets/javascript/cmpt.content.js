var website = window.website || {};
website.component = website.component || {};

website.component.Content = function () {
	var publics = this;

	publics.name = "content";

	publics.updateContentByClick = function (links, fragmentPath, urlRelativeSubPath) {
		[].forEach.call(links, function (link) {
			link.addEventListener("click", function (e) {
				var urn = link.getAttribute("href").replace(".html", "");
				e.preventDefault();

		        website.xhrRequest(fragmentPath + encodeURIComponent(urn) + ".htm", function (err, response) {
		            if (err) {
		                return website.xhrFallback(urn);
		            }

		    		history.pushState(urn, null, urlRelativeSubPath + "/" + urn + ".html");

				    document.getElementsByClassName(publics.name + "--inner")[0].innerHTML = response;
				});
			});
		});
	};

	publics.updateContentByHistoryBack = function () {
		window.addEventListener("popstate", function (e) {
		    if (e.state) {
		        website.xhrRequest("content/" + encodeURIComponent(e.state) + ".htm", function (err, response) {
		            if (err) {
		                return website.xhrFallback(e.state);
		            }

				    document.getElementsByClassName(publics.name + "--inner")[0].innerHTML = response;
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