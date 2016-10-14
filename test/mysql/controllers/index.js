exports.changeVariation = function (params, mainCallback) {
    var NA = this,
        variation = params.variation,
        User = NA.models.User,
        bruno = User();

    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            console.log(err);
            return false;
        }

        bruno
        .setConnection(connection)
        .firstname("bruno")
        .readFirst(function () {

            variation.id = bruno.id();
            variation.lastname = bruno.lastname();
            variation.firstname = bruno.firstname();
            variation.email = bruno.email();
            variation.birthdate = bruno.birthdate();
            variation.gender = (bruno.gender() === 1) ? variation.common.male : variation.common.female;
            variation.country = bruno.country();
            variation.town = bruno.town();
            variation.zipcode = bruno.zipcode();
            variation.address = bruno.address();

            mainCallback(variation);
        });
    });
};