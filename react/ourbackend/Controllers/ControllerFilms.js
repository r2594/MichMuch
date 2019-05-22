//controller require model;
var Films = require('../Models/ModelFilms');

exports.displayallfilms = function(req, res){

    Films.getAllfilms(function(err, data){
        if (err){
            res.send(err);
        } else {
            res.json(data)
        }
    })
}
// module.exports = {
//     createUser: async (req, res) => {
//         //create user
//         var query = "INSERT INTO users (" +
//             "email, password ) " +
//             "VALUES (?, ?)";

//         var data = [req.body.email, req.body.password]
//         try{
//             var user = connection.query(query, data);
//         } catch (err) {
//             console.error("Error occurred : ", err.message);
//             response.createResponse(res,500,err.message,{},{});
//         }
//         response.createResponse(res, 200, messages.USER_CREATED_SUCCESS, {}, {});
//     },
// };
