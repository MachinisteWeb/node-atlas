var lock = new Auth0Lock("NQ8SuASOanVk8LdLru3Syg3uTWUbBWvB", "haeresis.eu.auth0.com"),
    login = document.getElementsByClassName("login")[0],
    logout = document.getElementsByClassName("logout")[0],
    standard = document.getElementsByClassName("standard")[0],
    secret = document.getElementsByClassName("secret")[0],
    nickname = document.getElementsByClassName("nickname")[0],
    initProfile = function () {
        var idToken = localStorage.getItem("id-token");
        if (idToken) {
            lock.getProfile(idToken, function (error, profile) {
                infoProfile(profile);
            });
        }
    },
    infoProfile = function (profile) {
        nickname.textContent = profile.nickname;
        document.body.classList.add("authenticated");
    },
    closeProfile = function() {
        localStorage.removeItem("id-token");
        window.location.href = "/";
    },
    sendStandard = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:1337/api/random-quote");
        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState === 4) {
                alert(JSON.parse(xhr.response).quote);
            }
        });
        xhr.send();
    },
    sendSecret = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "http://localhost:1337/api/protected/random-quote");
        xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("id-token"));
        xhr.addEventListener("readystatechange", function () {
            if (xhr.readyState === 4) {
                alert(JSON.parse(xhr.response).quote);
            }
        });
        xhr.send();
    };

login.addEventListener("click", function () {
    lock.show();
});

logout.addEventListener("click", function () {
    closeProfile();
});

standard.addEventListener("click", function () {
    sendStandard();
});

secret.addEventListener("click", function () {
    sendSecret();
});

lock.on("authenticated", function (authResult) {
    lock.getProfile(authResult.idToken, function (error, profile) {
        localStorage.setItem("id-token", authResult.idToken);
        infoProfile(profile);
    });
});

initProfile();