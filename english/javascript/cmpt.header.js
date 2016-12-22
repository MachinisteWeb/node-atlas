var website = window.website || {};
website.component = website.component || {};

website.component.Header = function () {
    var publics = this;

    publics.name = "header";

    publics.loadAnimation = function () {
        var node = document.getElementsByClassName(publics.name + "--title--node")[0],
            atlas = document.getElementsByClassName(publics.name + "--title--atlas")[0],
            back = document.getElementsByClassName(publics.name + "--title--trans")[0],
            first = document.getElementsByClassName(publics.name + "--main--first")[0],
            second = document.getElementsByClassName(publics.name + "--main--second")[0],
            third = document.getElementsByClassName(publics.name + "--main--third")[0],
            abstract = document.getElementsByClassName(publics.name + "--abstract")[0],
            information = document.getElementsByClassName(publics.name + "--information")[0];

        node.classList.add("is-loaded");
        atlas.classList.add("is-loaded");
        abstract.classList.add("is-loaded");
        setTimeout(function () {
            second.classList.add("is-loaded");
            setTimeout(function () {
                first.classList.add("is-loaded");
                back.classList.add("is-loaded");
                setTimeout(function () {
                    information.classList.add("is-loaded");
                    third.classList.add("is-loaded");
                }, 1000);
            }, 1000);
        }, 1000);
    };

    publics.goTo = function () {
        var title = document.querySelector("." + publics.name + "--title h1");

        title.addEventListener("click", function () {
            website.scrollSmoothTo(0, 3);
        });
    };

    publics.init = function () {
        publics.loadAnimation();
        publics.goTo();
    };
};