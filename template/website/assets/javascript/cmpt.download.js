var website = window.website || {};
website.component = website.component || {};

website.component.Download = function () {
	var publics = this;

	publics.name = "download";

    publics.clipboard = function () {
        var input = document.getElementsByClassName(publics.name + "--clone--text")[0],
            sender = document.querySelector("." + publics.name + "--clone .fa");

        sender.addEventListener("click", function () {
            window.prompt(input.getAttribute("data-instruction"), input.value);
        });
    };

    publics.openTab = function () {
        var cli = document.querySelector("." + publics.name + "--cli"),
            api = document.querySelector("." + publics.name + "--api");

        cli.addEventListener("click", function () {
            cli.classList.add("is-active");
            api.classList.remove("is-active");
        });
        api.addEventListener("click", function () {
            api.classList.add("is-active");
            cli.classList.remove("is-active");
        });
    };

	publics.init = function () {
		publics.clipboard();
        publics.openTab();
	};
};