exports.changeVariation = function (params, mainCallback) {
    var NA = this,
        variation = params.variation,
        mongoose = NA.modules.mongoose,
        User = mongoose.model('user');

    User
    .findOne({ "identity.firstname": "Bruno" })
    .exec(function (err, bruno) {

        variation.id = bruno._id;
        variation.lastname = bruno.identity.lastname;
        variation.firstname = bruno.identity.firstname;
        variation.birthdate = bruno.identity.birthdate;
        variation.email = bruno.email;
        variation.gender = (bruno.identity.gender) ? variation.common.male : variation.common.female;
        variation.country = bruno.location.country;
        variation.town = bruno.location.town;
        variation.zipcode = bruno.location.zipcode;
        variation.address = bruno.location.address;

        mainCallback(variation);
    });
};