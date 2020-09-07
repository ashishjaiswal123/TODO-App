// module.exports.home = function(req, res){
//     return res.end('<h1>Todo App</h1>');
// }

module.exports.home = function(req,res){
    return res.render('home',{
        title: "TODO App"
    });
};