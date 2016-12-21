exports.changeVariations = function (params, next) {
    var NA = this,
        variations = params.variations,
        user = new NA.models.User(),
        user2 = new NA.models.User(),
        user3 = new NA.models.User(),
        user4 = new NA.models.User();

    NA.mySql.getConnection(function(err, connection) {
        if (err) {
            throw err;
        }

        // Exemple de lecture.
        user
        .setConnection(connection)
        .lastname("Elric")
        .read(function (allUsers) {
            variations.user = user;
            variations.users = allUsers;

            // Exemple de création.
            user2
            .setConnection(connection)
            .firstname("Winry")
            .lastname("Rockbell")
            .email("winry.rockbell@fma.br")
            .gender(true)
            .create(function (infos) {
                variations.insertId = infos.insertId;
                variations.user2 = user2;

                // Exemple de modification.
                user3
                .gender(false)
                .birthdate("2008-01-01")
                .country("Amestris")
                .town("Resembool")
                .zipcode("99999")
                .address("The Rockbell's house");

                user2.update(user3, function (infos) {
                    variations.affectedRows = infos.affectedRows;
                    variations.user2 = user2;

                    // Exemple de suppression.
                    user4
                    .setConnection(connection)
                    .gender(false)
                    .delete(function (infos) {
                        variations.deletedRows = infos.affectedRows;
                        next(variations);
                    });
                });
            });
        });
    });
};