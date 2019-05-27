var Films = require('../models/Models');

exports.display_all_films = function (req, res) {
    Films.getAllFilms(function(err, data){
        if (err){
            res.send(err);
        }
        else {
            res.json(data);
        }
    })
};