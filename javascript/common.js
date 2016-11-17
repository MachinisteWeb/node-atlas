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

    publics.loadAnimation = function () {
        var node = document.getElementsByClassName("header--title--node")[0],
            atlas = document.getElementsByClassName("header--title--atlas")[0],
            first = document.getElementsByClassName("header--main--first")[0],
            second = document.getElementsByClassName("header--main--second")[0],
            third = document.getElementsByClassName("header--main--third")[0],
            abstract = document.getElementsByClassName("header--abstract")[0],
            start = document.querySelector(".navigation--start button"),
            documentation = document.querySelector(".navigation--documentation button");

        node.classList.add("is-loaded");
        atlas.classList.add("is-loaded");
        abstract.classList.add("is-loaded");
        setTimeout(function () {
            second.classList.add("is-loaded");
            setTimeout(function () {
                first.classList.add("is-loaded");
                start.classList.add("is-loaded");
                setTimeout(function () {
                    third.classList.add("is-loaded");
                    documentation.classList.add("is-loaded");
                }, 1000);
            }, 1000);
        }, 1000);
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

    publics.goTo = function () {
        var title = document.querySelector(".header--title h1"),
            start = document.querySelector(".navigation--start button"),
            documentation = document.querySelector(".navigation--documentation button");

        title.addEventListener("click", function () {
            window.scrollTo(0, 0);
        });
        start.addEventListener("click", function () {
            window.scrollTo(0, 1);
        });
        documentation.addEventListener("click", function () {
            window.scrollTo(0, 1);
            setTimeout(function () {
                window.scrollTo(0, 350);
            }, 100);
        });
    };

    publics.manageStartedHeight = function () {
        var background = document.getElementsByClassName("background")[0],
            header = document.getElementsByClassName("header")[0],
            download = document.getElementsByClassName("download")[0],
            navigation = document.getElementsByClassName("navigation")[0],
            content = document.getElementsByClassName("content")[0];

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
            if (scrollTop < 11 && scrollTop > 0) {
                download.style.height = (window.innerHeight + scrollTop - 300) + "px";
            }
            if (scrollTop > 10) {
                content.style.height = (window.innerHeight - 100) + "px";
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
        /*window.addEventListener("DOMMouseScroll", function () {
            console.log("Here");
        });
        window.addEventListener("mousewheel", function () {
            console.log("Here");
        });*/
        window.addEventListener("scroll", function () {
            scrollState();
        });
        scrollState();
        allowAnimation();
    };

    publics.init = function () {
        var links = document.querySelectorAll(".navigation--home a, .navigation--menu a"),
            fragmentPath = document.body.getAttribute("data-content"),
            urlRelativeSubPath = document.body.getAttribute("data-subpath");

        website.smartTargetInjection();
        website.manageStartedHeight();
        website.loadAnimation();
        website.goTo();

        (new website.component.Header()).init();
        (new website.component.Navigation()).init();
        (new website.component.Content()).init(links, fragmentPath, urlRelativeSubPath);       
    };
}(website));

website.init();