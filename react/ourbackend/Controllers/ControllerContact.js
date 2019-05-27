var Contacts = require('../Models/ModelContact');

exports.displayallcontacts = function(req, res){

	Comments.getAllContacts(function(err, data){
		if (err){
            res.send(err);
        } else {
            res.json(data)
        }
	});


};	