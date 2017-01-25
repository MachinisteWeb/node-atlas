var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN),
    btnLogin = document.getElementById("btn-login"),
    btnLogout = document.getElementById("btn-logout"),
    btnStandard = document.getElementById("btn-standard"),
    btnSecret = document.getElementById("btn-secret"),
    showProfileInfo = function(profile) {
        var avatar = document.getElementById("avatar"),
            nickname = document.getElementById("nickname");

        avatar.src = profile.picture;
        nickname.textContent = profile.nickname;
        
        document.body.classList.add("authenticated");
    },
    retrieveProfile = function() {
        var idToken = localStorage.getItem("id-token");
        if (idToken) {
            lock.getProfile(idToken, function (error, profile) {
                if (error) {
                    return alert("There was an error getting the profile: " + error.message);
                }
                showProfileInfo(profile);
            });
        }
    },
    logout = function() {
        localStorage.removeItem("id-token");
        window.location.href = "/";
    };

btnLogin.addEventListener("click", function() {
    lock.show();
});

btnLogout.addEventListener("click", function() {
    logout();
});

btnStandard.addEventListener("click", function() {
    console.log("Bearer " + localStorage.getItem("id-token"));
    $.ajax({
        url: "http://localhost:1337/api/random-quote"
    }).done(function (response) {
        alert(response.quote);
    });
});

btnSecret.addEventListener("click", function() {
    console.log("Bearer " + localStorage.getItem("id-token"));
    $.ajax({
        url: "http://localhost:1337/api/protected/random-quote",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + localStorage.getItem("id-token"));
        }
    }).done(function (response) {
        alert(response.quote);
    });
});

lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
        if (error) {
            return alert("There was an error getting the profile: " + error.message);
        }

        localStorage.setItem("id-token", authResult.idToken);
        showProfileInfo(profile);
    });
});

retrieveProfile();