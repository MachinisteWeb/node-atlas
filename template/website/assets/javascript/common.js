/* global prettyPrint */

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
            start = document.querySelectorAll(".navigation--start button, .navigation--home--logo"),
            menu = document.querySelectorAll(".navigation--home--back, .navigation--menu a, .navigation--documentation button");

        function fadeIn(target, speed, next) {
            var last = +new Date(),
                scrollTop = document.body.scrollTop || document.documentElement.scrollTop,
                tickPlus = function () {
                    scrollTop = +scrollTop + (new Date() - last) / speed;
                    window.scrollTo(0, scrollTop);
                    last = +new Date();
                    if (+scrollTop < target) {
                        requestAnimationFrame(tickPlus);
                    } else if (next) {
                        window.scrollTo(0, target);
                        next();
                    }
                },
                tickMinus = function () {
                    scrollTop = +scrollTop - (new Date() - last) / speed;
                    window.scrollTo(0, scrollTop);
                    last = +new Date();
                    if (+scrollTop > target) {
                        requestAnimationFrame(tickMinus);
                    } else if (next) {
                        window.scrollTo(0, target);
                        next();
                    }
                };

            if (target > scrollTop) {
                tickPlus();
            } else {
                tickMinus();
            }
        }

        title.addEventListener("click", function () {
            fadeIn(0, 4);
        });
        Array.prototype.forEach.call(start, function (item) {
            item.addEventListener("click", function () {
                fadeIn(5, 4);
            });
        });
        Array.prototype.forEach.call(menu, function (item) {
            item.addEventListener("click", function () {
                fadeIn(350, 4);
            });
        });
    };

    publics.openTab = function () {
        var cli = document.querySelector(".download--cli"),
            api = document.querySelector(".download--api");

        cli.addEventListener("click", function () {
            cli.classList.add("is-active");
            api.classList.remove("is-active");
        });
        api.addEventListener("click", function () {
            api.classList.add("is-active");
            cli.classList.remove("is-active");
        });
    };

    publics.clipboard = function () {
        var input = document.getElementsByClassName("download--clone--text")[0],
            sender = document.querySelector(".download--clone .fa");

        sender.addEventListener("click", function () {
            window.prompt(input.getAttribute("data-instruction"), input.value);
        });
    };

    publics.openMenu = function () {
        var chevrons = document.querySelectorAll(".navigation--menu .fa");

        Array.prototype.forEach.call(chevrons, function (chevron) {
            var menu = chevron.nextElementSibling;
            
            chevron.addEventListener("click", function () {
                chevron.classList.toggle("fa-chevron-down");
                chevron.classList.toggle("fa-chevron-up");
                menu.classList.toggle("is-opened");
            });
        });
    };

    publics.toggleMenu = function () {
        var toggle = document.getElementsByClassName("navigation--menu--toggle")[0],
            inner = document.getElementsByClassName("navigation--menu--list--inner")[0],
            menu = document.getElementsByClassName("navigation--menu")[0];

        inner.addEventListener("click", function () {
            menu.classList.remove("is-opened");
            setTimeout(function () {
                menu.classList.remove("is-front");
            }, 1000);
        });
        toggle.addEventListener("click", function () {
            if (menu.classList.value.indexOf("is-opened") === -1) {
                menu.classList.add("is-front");
                setTimeout(function () {
                    menu.classList.add("is-opened");
                }, 0);
            } else {
                menu.classList.remove("is-opened");
                setTimeout(function () {
                    menu.classList.remove("is-front");
                }, 1000);
            }
        });
    };

    publics.highlightCode = function () {
        Array.prototype.forEach.call(document.querySelectorAll("pre code"), function (item) {
            item.classList.add("prettyprint");
            item.classList.add("linenums");
        });
        prettyPrint();
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
            download.classList.remove("is-small");
            if (scrollTop < 11 && scrollTop > 0) {
                download.style.height = (window.innerHeight + scrollTop - 300) + "px";
            }
            if (scrollTop > 10) {
                content.style.height = (window.innerHeight - 100) + "px";
                download.classList.add("is-small");
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
        website.openTab();
        website.clipboard();
        website.openMenu();
        website.toggleMenu();
        website.highlightCode();

        (new website.component.Header()).init();
        (new website.component.Navigation()).init();
        (new website.component.Content()).init(links, fragmentPath, urlRelativeSubPath);       
    };
}(website));

website.init();