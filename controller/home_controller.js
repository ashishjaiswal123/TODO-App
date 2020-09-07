// module.exports.home = function(req, res){
//     return res.end('<h1>Todo App</h1>');
// }

// module.exports.home = function(req,res){
//     return res.render('home',{
//         title: "TODO App"
//     });
// };

var todoList = [
    {
        description : 'what to do?',
        category : 'Personal',
        date : '2020-05-08'

    },
    {
        description : 'fee payment',
        category : 'Scool',
        date : '2020-05-06'

    },
    {
        description : 'fee payment',
        category : 'Scool',
        date : '2020-05-12'

    }
]

//home page of todo app
module.exports.home = function(req,res){
    return res.render('home',{
        title: "TODO App",
        todo_list : todoList
    });
};

// for adding todo list
module.exports.create = function(req, res){
//     console.log(req);
//    return res.redirect('/user/profile');
    // console.log(req.body);

    todoList.push(req.body);
    return res.redirect('back');
};

//for deletion
module.exports.delete = function(req,res){
   console.log(req.query.date);
   let date = req.query.date;
   let todoListIndex = todoList.findIndex(list => list.date == date );
//    if(todoListIndex != -1){
//        todoList.splice(todoListIndex,1);
//    }
     todoList.splice(todoListIndex,1);
   return ;
};