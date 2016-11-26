var website = window.website || {};
website.component = website.component || {};

website.component.Navigation = function () {
	var publics = this;

	publics.name = "navigation";

    publics.loadAnimation = function () {
        var start = document.querySelector("." + publics.name + "--start button"),
            documentation = document.querySelector("." + publics.name + "--documentation button");

        setTimeout(function () {
            start.classList.add("is-loaded");
            setTimeout(function () {
                documentation.classList.add("is-loaded");
            }, 1000);
        }, 2000);
    };

    publics.openSubMenu = function () {
        var chevrons = document.querySelectorAll("." + publics.name + "--menu .fa"),
            links = document.querySelectorAll("." + publics.name + "--menu a");

        Array.prototype.forEach.call(links, function (link) {
            link.addEventListener("click", function () {
                Array.prototype.forEach.call(chevrons, function (chevron) {
                    chevron.classList.add("fa-chevron-down");
                    chevron.classList.remove("fa-chevron-up");
                    chevron.nextElementSibling.classList.remove("is-opened");
                });
            });
        });

        Array.prototype.forEach.call(chevrons, function (chevron) {
            chevron.addEventListener("click", function () {
                Array.prototype.forEach.call(chevrons, function (otherChevron) {
                    if (otherChevron !== chevron) {                    
                        otherChevron.classList.add("fa-chevron-down");
                        otherChevron.classList.remove("fa-chevron-up");
                        otherChevron.nextElementSibling.classList.remove("is-opened");  
                    }
                });
                chevron.classList.toggle("fa-chevron-down");
                chevron.classList.toggle("fa-chevron-up");
                chevron.nextElementSibling.classList.toggle("is-opened");
            });
        });
    };

    publics.toggleMenu = function () {
        var toggle = document.getElementsByClassName(publics.name + "--menu--toggle")[0],
            inner = document.getElementsByClassName(publics.name + "--menu--list--inner")[0],
            menu = document.getElementsByClassName(publics.name + "--menu")[0];

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

    publics.goTo = function () {
        var start = document.querySelectorAll("." + publics.name + "--start button, ." + publics.name + "--home--logo"),
            menu = document.querySelectorAll("." + publics.name + "--home--back, ." + publics.name + "--menu a, ." + publics.name + "--documentation button"),
            download = document.querySelector("." + publics.name + "--home--back span");

        download.addEventListener("click", function (e) {
            e.preventDefault();
            website.scrollSmoothTo(200, 3);
        });
        Array.prototype.forEach.call(start, function (item) {
            item.addEventListener("click", function () {
                website.scrollSmoothTo(1, 3);
            });
        });
        Array.prototype.forEach.call(menu, function (item) {
            var content = document.getElementsByClassName("content--inner")[0];
            item.addEventListener("click", function () {
                website.scrollSmoothTo(350 + 10, 3, function () {
                    content.classList.remove("is-blocked");
                });
            });
        });
    };

	publics.init = function () {
		publics.loadAnimation();
        publics.openSubMenu();
        publics.toggleMenu();
        publics.goTo();
	};
};