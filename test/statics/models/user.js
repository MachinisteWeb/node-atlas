(function (expose, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory;
    } else {
        expose.User = factory;
    }
}(this, function User() {
    var privates = {},
        publics = this;

    publics.lastname = function (lastname) {
        if (typeof lastname === 'undefined') {
            return privates.lastname;
        } else {
            privates.lastname = lastname;
            return publics;
        }
    };

    publics.firstname = function (firstname) {
        if (typeof firstname === 'undefined') {
            return privates.firstname;
        } else {
            privates.firstname = firstname;
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
}));