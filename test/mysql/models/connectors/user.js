/* jslint esversion: 6 */
var user = require('../objects/user.js');

function User(connection) {
    var privates = {},
    	publics = this;

    user.call(publics);

    privates.connection = connection;

    publics.setConnection = function (connection) {
		privates.connection = connection;
    	return publics;
    };

    publics.read = function (callback) {
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
    		where = "";

		if (publics.id()) { where += ' && `id` = ' + publics.id(); }
		if (publics.lastname()) { where += ' && `lastname` = "' + publics.lastname() + '"'; }
		if (publics.firstname()) { where += ' && `firstname` = "' + publics.firstname() + '"'; }
		if (publics.email()) { where += ' && `email` = "' + publics.email() + '"'; }
		if (publics.birthdate()) { where += ' && `birthdate` = "' + publics.birthdate() + '"'; }
		if (typeof publics.gender() === "boolean") { where += ' && `gender` = ' + (publics.gender() ? 1 : 0); }
		if (publics.country()) { where += ' && `country` = "' + publics.country() + '"'; }
		if (publics.town()) { where += ' && `town` = "' + publics.town() + '"'; }
		if (publics.zipcode()) { where += ' && `zipcode` = "' + publics.zipcode() + '"'; }
		if (publics.address()) { where += ' && `address` = "' + publics.address() + '"'; }

		where = where.replace("&&", "WHERE");

		privates.connection.query(select + where, function (err, rows) {
			var users = [],
				user;

			if (err) {
				throw err;
			}

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

			for (var i = 0; i < rows.length; i++) {
				user = new User();
				user.id(rows[i].id);
				user.lastname(rows[i].lastname);
				user.firstname(rows[i].firstname);
				user.email(rows[i].email);
				user.birthdate(rows[i].birthdate);
				user.gender((rows[i].gender) ? true : false);
				user.country(rows[i].country);
				user.town(rows[i].town);
				user.zipcode(rows[i].zipcode);
				user.address(rows[i].address);
				users.push(user);
			}

			if (callback) {
				callback(users);
			}
		});

		return publics;
    };

    publics.create = function (callback) {
    	var insert = "INSERT INTO user (",
    		values = ") VALUES (";

		if (publics.id()) { insert += "`id`, "; }
		if (publics.lastname()) { insert += "`lastname`, "; }
		if (publics.firstname()) { insert += "`firstname`, "; }
		if (publics.email()) { insert += "`email`, "; }
		if (publics.birthdate()) { insert += "`birthdate`, "; }
		if (typeof publics.gender() === "boolean") { insert += "`gender`, "; }
		if (publics.country()) { insert += "`country`, "; }
		if (publics.town()) { insert += "`town`, "; }
		if (publics.zipcode()) { insert += "`zipcode`, "; }
		if (publics.address()) { insert += "`address`, "; }

		insert = insert.replace(/, $/g, "");

		if (publics.id()) { values += publics.id() + ', '; }
		if (publics.lastname()) { values += '"' + publics.lastname() + '", '; }
		if (publics.firstname()) { values += '"' + publics.firstname() + '", '; }
		if (publics.email()) { values += '"' + publics.email() + '", '; }
		if (publics.birthdate()) { values += '"' + publics.birthdate() + '", '; }
		if (typeof publics.gender() === "boolean") { values += (publics.gender() ? 1 : 0) + ', '; }
		if (publics.country()) { values += '"' + publics.country() + '", '; }
		if (publics.town()) { values += '"' + publics.town() + '", '; }
		if (publics.zipcode()) { values += '"' + publics.zipcode() + '", '; }
		if (publics.address()) { values += '"' + publics.address() + '", '; }

		values = values.replace(/, $/g, ")");

		privates.connection.query(insert + values, function (err, infos) {
			if (err) { 
				throw err;
			}

			publics.id(infos.insertId);

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };

    publics.update = function (user, callback) {
    	var update = "UPDATE user SET",
    		where = "";

		if (user.id()) { update += '`id` = ' + user.id() + ', '; }
		if (user.lastname()) { update += '`lastname` = "' + user.lastname() + '", '; }
		if (user.firstname()) { update += '`firstname` = "' + user.firstname() + '", '; }
		if (user.email()) { update += '`email` = "' + user.email() + '", '; }
		if (user.birthdate()) { update += '`birthdate` = "' + user.birthdate() + '", '; }
		if (typeof user.gender() === "boolean") { update += '`gender` = ' + (user.gender() ? 1 : 0) + ', '; }
		if (user.country()) { update += '`country` = "' + user.country() + '", '; }
		if (user.town()) { update += '`town` = "' + user.town() + '", '; }
		if (user.zipcode()) { update += '`zipcode` = "' + user.zipcode() + '", '; }
		if (user.address()) { update += '`address` = "' + user.address() + '", '; }

		update = update.replace(/, $/g, "");

		if (publics.id()) { where += ' && `id` = ' + publics.id(); }
		if (publics.lastname()) { where += ' && `lastname` = "' + publics.lastname() + '"'; }
		if (publics.firstname()) { where += ' && `firstname` = "' + publics.firstname() + '"'; }
		if (publics.email()) { where += ' && `email` = "' + publics.email() + '"'; }
		if (publics.birthdate()) { where += ' && `birthdate` = "' + publics.birthdate() + '"'; }
		if (typeof publics.gender() === "boolean") { where += ' && `gender` = ' + (publics.gender() ? 1 : 0); }
		if (publics.country()) { where += ' && `country` = "' + publics.country() + '"'; }
		if (publics.town()) { where += ' && `town` = "' + publics.town() + '"'; }
		if (publics.zipcode()) { where += ' && `zipcode` = "' + publics.zipcode() + '"'; }
		if (publics.address()) { where += ' && `address` = "' + publics.address() + '"'; }

		where = where.replace("&&", "WHERE");

		privates.connection.query(update + where, function (err, infos) {
			if (err) { 
				throw err;
			}

			if (user.id()) { publics.id(user.id()); }
			if (user.lastname()) { publics.lastname(user.lastname()); }
			if (user.firstname()) { publics.firstname(user.firstname()); }
			if (user.email()) { publics.email(user.email()); }
			if (user.birthdate()) { publics.birthdate(user.birthdate()); }
			if (typeof publics.gender() === "boolean") { publics.gender(user.gender()); }
			if (user.country()) { publics.country(user.country()); }
			if (user.town()) { publics.town(user.town()); }
			if (user.zipcode()) { publics.zipcode(user.zipcode()); }
			if (user.address()) { publics.address(user.address()); }

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };

    publics.delete = function (callback) {
    	var del = "DELETE FROM user",
    		where = "";

		if (publics.id()) { where += ' && `id` = ' + publics.id(); }
		if (publics.lastname()) { where += ' && `lastname` = "' + publics.lastname() + '"'; }
		if (publics.firstname()) { where += ' && `firstname` = "' + publics.firstname() + '"'; }
		if (publics.email()) { where += ' && `email` = "' + publics.email() + '"'; }
		if (publics.birthdate()) { where += ' && `birthdate` = "' + publics.birthdate() + '"'; }
		if (typeof publics.gender() === "boolean") { where += ' && `gender` = ' + (publics.gender() ? 1 : 0); }
		if (publics.country()) { where += ' && `country` = "' + publics.country() + '"'; }
		if (publics.town()) { where += ' && `town` = "' + publics.town() + '"'; }
		if (publics.zipcode()) { where += ' && `zipcode` = "' + publics.zipcode() + '"'; }
		if (publics.address()) { where += ' && `address` = "' + publics.address() + '"'; }

		where = where.replace("&&", "WHERE");

		privates.connection.query(del + where, function (err, infos) {
			if (err) { 
				throw err;
			}

			if (publics.id()) { publics.id(undefined); }
			if (publics.lastname()) { publics.lastname(undefined); }
			if (publics.firstname()) { publics.firstname(undefined); }
			if (publics.email()) { publics.email(undefined); }
			if (publics.birthdate()) { publics.birthdate(undefined); }
			if (typeof publics.gender() === "boolean") { publics.gender(undefined); }
			if (publics.country()) { publics.country(undefined); }
			if (publics.town()) { publics.town(undefined); }
			if (publics.zipcode()) { publics.zipcode(undefined); }
			if (publics.address()) { publics.address(undefined); }

			if (callback) {
				callback(infos);
			}
		});

		return publics;
    };
}

User.prototype = Object.create(user.prototype);
User.prototype.constructor = User;

module.exports = User;