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

    publics.birthdate = function (birthdate) {
        if (typeof birthdate === 'undefined') {
            return privates.birthdate;
        } else {
            privates.birthdate = birthdate;
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
    
    publics.country = function (country) {
        if (typeof country === 'undefined') {
            return privates.country;
        } else {
            privates.country = country;
            return publics;
        }
    };

    publics.town = function (town) {
        if (typeof town === 'undefined') {
            return privates.town;
        } else {
            privates.town = town;
            return publics;
        }
    };

    publics.zipcode = function (zipcode) {
        if (typeof zipcode === 'undefined') {
            return privates.zipcode;
        } else {
            privates.zipcode = zipcode;
            return publics;
        }
    };

    publics.address = function (address) {
        if (typeof address === 'undefined') {
            return privates.address;
        } else {
            privates.address = address;
            return publics;
        }
    };
}));