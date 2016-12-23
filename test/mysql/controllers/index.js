exports.changeVariations = function (next, locals) {
    var NA = this,
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
            locals.user = user;
            locals.users = allUsers;

            // Exemple de création.
            user2
            .setConnection(connection)
            .firstname("Winry")
            .lastname("Rockbell")
            .email("winry.rockbell@fma.br")
            .gender(true)
            .create(function (infos) {
                locals.insertId = infos.insertId;
                locals.user2 = user2;

                // Exemple de modification.
                user3
                .gender(false)
                .birthdate("2008-01-01")
                .country("Amestris")
                .town("Resembool")
                .zipcode("99999")
                .address("The Rockbell's house");

                user2.update(user3, function (infos) {
                    locals.affectedRows = infos.affectedRows;
                    locals.user2 = user2;

                    // Exemple de suppression.
                    user4
                    .setConnection(connection)
                    .gender(false)
                    .delete(function (infos) {
                        locals.deletedRows = infos.affectedRows;
                        next();
                    });
                });
            });
        });
    });
};