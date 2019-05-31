//controller require model;
var Films = require('../Models/ModelFilms');

exports.displayallfilms = function(req, res){

    Films.getAllfilms(function(err, data){
        if (err){
            res.send(err);
        } else {
            res.json(data)
        }
    });

};


exports.displayonefilm = function(req, res){

    Films.getOneFilm(function(err, data){
        if (err){
            res.send(err);
        } else {
            res.json(data)
        }
    });

};

exports.deleteonefilm = function(req, res){

    console.log('lol');

    var movie_delete = new Films(req.body);

    Films.deletefilm(movie_delete, function(err, data){
        if (err){
            res.send(err);
        } else {
            res.json(data);
        }
    });
}
