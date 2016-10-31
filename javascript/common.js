var website = window.website || {};
website.component = website.component || {};

(function (publics) {
    publics.xhrRequest = function(url, next) {
        var request = new XMLHttpRequest();

        if (location.protocol !== "file:") {
            request.open("GET", url, true);
            request.send();
        } else {
            return next(new Error("Impossible to use AJAX in file system mode."));
        }

        request.addEventListener("load", function () {
            if (request.status < 200 && request.status >= 400) {
                return next(new Error("The server was reached, but with no correct response."));
            }
            next(null, request.responseText);
        });

        request.addEventListener("error", function () {
            return next(new Error("The server is unreachable."));
        });
    };

    publics.xhrFallback = function (url) {
        location.href = encodeURIComponent(url) + ".html";
    };

    publics.init = function () {
        var links = document.querySelectorAll(".navigation--home a, .navigation--menu a"),
            fragmentPath = document.body.getAttribute("data-content"),
            urlRelativeSubPath = document.body.getAttribute("data-subpath");

        (new website.component.Header()).init();
        (new website.component.Navigation()).init();
        (new website.component.Content()).init(links, fragmentPath, urlRelativeSubPath);       
    };
}(website));

website.init();