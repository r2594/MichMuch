var sql = require('./db.js');

var Contacts = function(data){
	this.id = data.id
};

Contacts.getAllContacts = function(result){
	sql.query('SELECT * FROM contacts ', function(error,res, fields){
		if(error) throw error;
		result(null, res);
	});
};

module.exports = Contacts;