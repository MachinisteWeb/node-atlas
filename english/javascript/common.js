/* global prettyPrint */

var website = window.website || {};
website.component = website.component || {};

(function (publics) {
    var privates = {
        firstScroll: true
    };
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

    publics.smartTargetInjection = function () {
        var links = document.links;
        for (var i = 0, linksLength = links.length; i < linksLength; i++) {
            if (!links[i].target) {
                if (
                    links[i].hostname !== window.location.hostname || 
                    /\.(?!html?)([a-z]{0,3}|[a-zt]{0,4})$/.test(links[i].pathname)
                ) {
                    links[i].target = "_blank";
                } 
            }
        }
    };

    publics.scrollSmoothTo = function (scrollTarget, speed, next) {
        var last = +new Date(),
            scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
            tickPlus = function () {
                scrollTop = +scrollTop + (new Date() - last) / speed;
                window.scrollTo(0, scrollTop);
                last = +new Date();
                if (+scrollTop < scrollTarget) {
                    requestAnimationFrame(tickPlus);
                } else if (next) {
                    window.scrollTo(0, scrollTarget);
                    next();
                }
            },
            tickMinus = function () {
                scrollTop = +scrollTop - (new Date() - last) / speed;
                window.scrollTo(0, scrollTop);
                last = +new Date();
                if (+scrollTop > scrollTarget) {
                    requestAnimationFrame(tickMinus);
                } else if (next) {
                    window.scrollTo(0, scrollTarget);
                    next();
                }
            };

        if (scrollTarget > scrollTop) {
            tickPlus();
        } else {
            tickMinus();
        }
    };

    publics.goToHash = function(container, hash) {
        var anchor = document.getElementById(hash);
        if (anchor) {
            container.scrollTop = anchor.offsetTop;
        }
    };

    publics.highlightCode = function () {
        Array.prototype.forEach.call(document.querySelectorAll("pre code"), function (item) {
            item.classList.add("prettyprint");
            item.classList.add("linenums");
        });
        prettyPrint();
    };

    publics.manageHeight = function () {
        var background = document.getElementsByClassName("background")[0],
            header = document.getElementsByClassName("header")[0],
            download = document.getElementsByClassName("download")[0],
            navigation = document.getElementsByClassName("navigation")[0],
            content = document.getElementsByClassName("content")[0],
            contentInner = document.getElementsByClassName("content--inner")[0];

        function allowAnimation() {
            setInterval(function () {
                header.classList.add("with-animation");
                navigation.classList.add("with-animation");
                download.classList.add("with-animation");
                content.classList.add("with-animation");
            });
        }

        function resetHeight() {
            var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
            header.style.height = "";
            download.style.height = "";
            navigation.style.height = "";
            content.style.height = "";
            download.classList.remove("is-small");
            if (scrollTop < 11 && scrollTop > 0) {
                download.style.height = (window.innerHeight + scrollTop - 300) + "px";
            }
            if (scrollTop > 10) {
                content.style.height = (window.innerHeight - 100) + "px";
                download.classList.add("is-small");
                if (privates.firstScroll) {
                    website.goToHash(contentInner, location.href.split("#")[1]);
                    privates.firstScroll = false;
                }
            }
        }

        function setHeight() {
            header.style.height = (window.innerHeight * 0.7) + "px";
            download.style.height = (window.innerHeight * 0) + "px";
            navigation.style.height = (window.innerHeight * 0.3) + "px";
        }

        function nextSetHeight() {
            setHeight();
        }

        function addSetHeight() {
            window.addEventListener("resize", nextSetHeight);
        }

        function removeSetHeight() {
            window.removeEventListener("resize", nextSetHeight);
        }

        function resetScroll() {
            background.classList.remove("is-scrolled");
            header.classList.remove("is-scrolled");
            download.classList.remove("is-scrolled");
            navigation.classList.remove("is-scrolled");
            content.classList.remove("is-scrolled");
        }

        function setScroll() {
            background.classList.add("is-scrolled");
            header.classList.add("is-scrolled");
            navigation.classList.add("is-scrolled");
            download.classList.add("is-scrolled");
            content.classList.add("is-scrolled");
        }

        function onTop() {
            setHeight();
            resetScroll();
            addSetHeight();
        }

        function onScroll() {
            resetHeight();
            setScroll();
            removeSetHeight();
        }

        function scrollState () {
            if (document.body.scrollTop || document.documentElement.scrollTop > 0) {
                onScroll();
            } else {
                onTop();
            }
        }
        window.addEventListener("scroll", function () {
            scrollState();
        });
        scrollState();
        allowAnimation();
    };

    publics.init = function () {
        var links = document.querySelectorAll(".navigation--home a, .navigation--menu a, .toc a"),
            fragmentPath = document.body.getAttribute("data-content"),
            urlRelativeSubPath = document.body.getAttribute("data-subpath"),
            content = document.getElementsByClassName("content--inner")[0];

        website.smartTargetInjection();
        website.manageHeight();
        website.highlightCode();
        website.goToHash(content, location.href.split("#")[1]);

        (new website.component.Header()).init();
        (new website.component.Download()).init();
        (new website.component.Navigation()).init();
        (new website.component.Content()).init(links, fragmentPath, urlRelativeSubPath);       
    };
}(website));

website.init();