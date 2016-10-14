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
        .password('a5e0ba393fd8ccc094235059aa702e0e')
        .read(function () {

            console.log(bruno.id());
            console.log(bruno.name());
            console.log(bruno.password());
            console.log(bruno.email());
            console.log(bruno.birth());
            console.log(bruno.gender());
            console.log(bruno.isavatar());
            console.log(bruno.isnavi());
            console.log(bruno.subscription());
            console.log(bruno.connected());
            console.log(bruno.invisible());

            mainCallback(variation);
        });
    });
};