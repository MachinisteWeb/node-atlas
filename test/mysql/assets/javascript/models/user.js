(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.User = factory;
    }
}(this, function User() {
    var privates = {},
        publics = this;

    if (!(publics instanceof User)) {
        return new User();
    }

    publics.id = function (id) {
        if (typeof id === 'undefined') {
            return privates.id;
        } else {
            privates.id = id;
            return publics;
        }
    };

    publics.name = function (name) {
        if (typeof name === 'undefined') {
            return privates.name;
        } else {
            privates.name = name;
            return publics;
        }
    };

    publics.password = function (password) {
        if (typeof password === 'undefined') {
            return privates.password;
        } else {
            privates.password = password;
            return publics;
        }
    };

    publics.email = function (email) {
        if (typeof email === 'undefined') {
            return privates.email;
        } else {
            privates.email = email;
            return publics;
        }
    };

    publics.birth = function (birth) {
        if (typeof birth === 'undefined') {
            return privates.birth;
        } else {
            privates.birth = birth;
            return publics;
        }
    };

    publics.gender = function (gender) {
        if (typeof gender === 'undefined') {
            return privates.gender;
        } else {
            privates.gender = gender;
            return publics;
        }
    };
    
    publics.isavatar = function (isavatar) {
        if (typeof isavatar === 'undefined') {
            return privates.isavatar;
        } else {
            privates.isavatar = isavatar;
            return publics;
        }
    };

    publics.isnavi = function (isnavi) {
        if (typeof isnavi === 'undefined') {
            return privates.isnavi;
        } else {
            privates.isnavi = isnavi;
            return publics;
        }
    };

    publics.subscription = function (subscription) {
        if (typeof subscription === 'undefined') {
            return privates.subscription;
        } else {
            privates.subscription = subscription;
            return publics;
        }
    };

    publics.connected = function (connected) {
        if (typeof connected === 'undefined') {
            return privates.connected;
        } else {
            privates.connected = connected;
            return publics;
        }
    };

    publics.invisible = function (invisible) {
        if (typeof invisible === 'undefined') {
            return privates.invisible;
        } else {
            privates.invisible = invisible;
            return publics;
        }
    };
}));