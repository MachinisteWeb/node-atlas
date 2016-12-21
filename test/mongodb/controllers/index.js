exports.changeVariations = function (params, next) {
    var NA = this,
        variations = params.variations,
        mongoose = NA.modules.mongoose,
        User = mongoose.model('user');

    User
    .findOne({ "identity.firstname": "Bruno" })
    .exec(function (err, bruno) {

        variations.id = bruno._id;
        variations.lastname = bruno.identity.lastname;
        variations.firstname = bruno.identity.firstname;
        variations.birthdate = bruno.identity.birthdate;
        variations.email = bruno.email;
        variations.gender = (bruno.identity.gender) ? variations.common.male : variations.common.female;
        variations.country = bruno.location.country;
        variations.town = bruno.location.town;
        variations.zipcode = bruno.location.zipcode;
        variations.address = bruno.location.address;

        next(variations);
    });
};