/* jslint esversion: 6 */
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

    publics.readFirst = function (callback) {
    	var select = `SELECT
    				id,
					lastname,
					firstname,
					email,
					birthdate,
					gender,
					country,
					town,
					zipcode,
					address
	 			FROM user`, 
    		where = "", 
    		limit = " LIMIT 0,1 ",
    		addWhere = " WHERE ";

		if (publics.id()) { where += addWhere + "`id` = '" + publics.id().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.lastname()) { where += addWhere + "`lastname` = '" + publics.lastname().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.firstname()) { where += addWhere + "`firstname` = '" + publics.firstname().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.email()) { where += addWhere + "`email` = '" + publics.email().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.birthdate()) { where += addWhere + "`birthdate` = '" + publics.birthdate().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.gender()) { where += addWhere + "`gender` = '" + publics.gender().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.country()) { where += addWhere + "`country` = '" + publics.country().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.town()) { where += addWhere + "`town` = '" + publics.town().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.zipcode()) { where += addWhere + "`zipcode` = '" + publics.zipcode().replace(/'/g, "''") + "'"; addWhere = ' && '; }
		if (publics.address()) { where += addWhere + "`address` = '" + publics.address().replace(/'/g, "''") + "'"; addWhere = ' && '; }

		privates.connection.query(select + where + limit, function(err, rows, fields) {
			if (err) console.log(err);

			if (rows[0]) {
				publics.id(rows[0].id);
				publics.lastname(rows[0].lastname);
				publics.firstname(rows[0].firstname);
				publics.email(rows[0].email);
				publics.birthdate(rows[0].birthdate);
				publics.gender((rows[0].gender) ? true : false);
				publics.country(rows[0].country);
				publics.town(rows[0].town);
				publics.zipcode(rows[0].zipcode);
				publics.address(rows[0].address);
			}

			callback();
		});
    };
}

User.prototype = Object.create(user.prototype);
User.prototype.constructor = User;

module.exports = User;