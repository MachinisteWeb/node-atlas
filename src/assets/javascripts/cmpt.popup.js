var website = window.website || {};
website.component = website.component || {};

website.component.Popup = function () {
    var publics = this;

    publics.name = "popup";

    publics.openClose = function (target, urlRelativeSubPath) {
        var popup = document.getElementsByClassName(publics.name)[0],
            nodeatlas = document.getElementsByClassName(publics.name + "--nodeatlas")[0],
            challenger = document.getElementsByClassName(publics.name + "--challenger")[0];

        target.addEventListener("click", function () {
            website.xhrRequest("markdown" + urlRelativeSubPath + "/express-me.md", function (err, me) {
                website.xhrRequest("markdown" + urlRelativeSubPath + "/express-him.md", function (err, him) {
                    nodeatlas.innerHTML = me;
                    challenger.innerHTML = him;
                    website.highlightCode();
                    popup.classList.add("is-opened");
                });
            });
        });
        popup.addEventListener("click", function (e) {
            if (e.target.getAttribute("class").indexOf("popup cmpt") !== -1 ||
                e.target.getAttribute("class") === "close") {
                popup.classList.remove("is-opened");
            }
        });
    };

    publics.init = function (target, urlRelativeSubPath) {
        publics.openClose(target, urlRelativeSubPath);
    };
};