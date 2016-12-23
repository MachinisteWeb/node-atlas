exports.changeVariations = function (next, locals) {
    var NA = this,
        mongoose = NA.modules.mongoose,
        User = mongoose.model('user');

    User
    .findOne({ "identity.firstname": "Bruno" })
    .exec(function (err, bruno) {

        locals.id = bruno._id;
        locals.lastname = bruno.identity.lastname;
        locals.firstname = bruno.identity.firstname;
        locals.birthdate = bruno.identity.birthdate;
        locals.email = bruno.email;
        locals.gender = (bruno.identity.gender) ? locals.common.male : locals.common.female;
        locals.country = bruno.location.country;
        locals.town = bruno.location.town;
        locals.zipcode = bruno.location.zipcode;
        locals.address = bruno.location.address;

        next();
    });
};