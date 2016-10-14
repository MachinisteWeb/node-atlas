var user = require('../assets/javascript/models/user.js');

function User(connection) {
    var privates = {},
    	publics = this;

    privates.connection = connection;

	if (!(publics instanceof User)) {
        return new User();
    }

    publics.setConnection = function (connection) {
		privates.connection = connection;
    	return publics;
    };

    user.call(publics);

    publics.read = function (callback) {
    	var fields = 
			'user_id' + ', ' +
			'user_name' + ', ' +
			'user_password' + ', ' +
			'user_email' + ', ' +
			'user_birth' + ', ' +
			'user_gender' + ', ' +
			'user_isavatar' + ', ' +
			'user_isnavi' + ', ' +
			'user_subscription' + ', ' +
			'user_connected' + ', ' +
			'user_invisible',
    		query = 'SELECT ' + fields +' FROM avtr_user', where = '', addWhere = ' WHERE '

		if (publics.id()) { where += addWhere + "`user_id` = '" + publics.id().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.name()) { where += addWhere + "`user_name` = '" + publics.name().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.password()) { where += addWhere + "`user_password` = '" + publics.password().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.email()) { where += addWhere + "`user_email` = '" + publics.email().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.birth()) { where += addWhere + "`user_birth` = '" + publics.birth().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.gender()) { where += addWhere + "`user_gender` = '" + publics.gender().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.isavatar()) { where += addWhere + "`user_isavatar` = '" + publics.isavatar().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.isnavi()) { where += addWhere + "`user_isnavi` = '" + publics.isnavi().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.subscription()) { where += addWhere + "`user_subscription` = '" + publics.subscription().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.connected()) { where += addWhere + "`user_connected` = '" + publics.connected().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.invisible()) { where += addWhere + "`user_invisible` = '" + publics.invisible().replace(/'/g, "''") + "'"; addWhere = ' && '; }

		privates.connection.query(query + where, function(err, rows, fields) {
			if (err) console.log(err);

			if (rows[0]) {
				publics.id(rows[0].user_id);
				publics.name(rows[0].user_name);
				publics.password(rows[0].user_password);
				publics.email(rows[0].user_email);
				publics.birth(rows[0].user_birth);
				publics.gender(rows[0].user_gender);
				publics.isavatar(rows[0].user_isavatar);
				publics.isnavi(rows[0].user_isnavi);
				publics.subscription(rows[0].user_subscription);
				publics.connected(rows[0].user_connected);
				publics.invisible(rows[0].user_invisible);
			}

			callback();
		});
    };
};

User.prototype = Object.create(user.prototype);
User.prototype.constructor = User;

module.exports = User;