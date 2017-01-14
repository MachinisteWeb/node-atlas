var website = window.website || {};
website.component = website.component || {};

website.component.Popup = function () {
    var publics = this,
    	challengers = ["nodejs", "expressjs"],
    	file;

    publics.name = "popup";

    publics.setChallengers = function () {
        file = challengers.filter(function (item) {
            return file !== item;
        });
        file = file[Math.floor(Math.random() * (file.length - 1))];
        document.querySelector(".download--slide--step3 img").setAttribute("src", "./media/images/battles/" + file + ".png");
    };

    publics.openClose = function (target, urlRelativeSubPath) {
        var popup = document.getElementsByClassName(publics.name)[0],
            nodeatlas = document.getElementsByClassName(publics.name + "--nodeatlas")[0],
            challenger = document.getElementsByClassName(publics.name + "--challenger")[0];

        target.addEventListener("click", function (e) {
            if (e.target.getAttribute("class") !== "fa fa-refresh") {
                website.xhrRequest(urlRelativeSubPath + "/markdown/" + file + "-me.md", function (err, me) {
                    website.xhrRequest(urlRelativeSubPath + "/markdown/" + file + "-him.md", function (err, him) {
                        nodeatlas.innerHTML = me;
                        challenger.innerHTML = him;
                        website.highlightCode();
                        popup.classList.add("is-opened");
                    });
                });
            } else {
                publics.setChallengers();
            }
        });
        popup.addEventListener("click", function (e) {
            if (e.target.getAttribute("class").indexOf("popup cmpt") !== -1 ||
                e.target.getAttribute("class") === "close") {
                popup.classList.remove("is-opened");
            }
        });
    };

    publics.init = function (target, urlRelativeSubPath) {
        publics.setChallengers();
        publics.openClose(target, urlRelativeSubPath);
    };
};