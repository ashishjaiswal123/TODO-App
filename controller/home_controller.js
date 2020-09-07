// module.exports.home = function(req, res){
//     return res.end('<h1>Todo App</h1>');
// }

// module.exports.home = function(req,res){
//     return res.render('home',{
//         title: "TODO App"
//     });
// };

// const db = require('../config/mongoose');

const List = require('../models/todo'); 

var todoList = [
    {
        description : 'what to do?',
        category : 'Personal',
        date : '2020-05-08'

    },
    {
        description : 'fee payment',
        category : 'School',
        date : '2020-05-06'

    },
    {
        description : 'fee payment',
        category : 'School',
        date : '2020-05-12'

    }
]

//home page of todo app
module.exports.home = function(req,res){
    
    List.find({},function(err,allTodoList){
        if(err){
            console.log('error in fetching data from db');
            return;
        }
        return res.render('home',{
            title: "TODO App",
            todo_list : allTodoList
        });
    });
    
};

// for adding todo list
module.exports.create = function(req, res){
//     console.log(req);
//    return res.redirect('/user/profile');
    // console.log(req.body);

   // todoList.push(req.body);

   List.create({
       description : req.body.description,
       category : req.body.category,
       date : req.body.date
   },function(err,newList){
       if(err){console.log('error in creating conatct'); return;}
       console.log('*****',newList);
       return res.redirect('back');
   });
    
};

//for deletion
module.exports.delete = function(req,res){
//    console.log(req.query.date);
//    let date = req.query.date;
//    let todoListIndex = todoList.findIndex(list => list.date == date );
// //    if(todoListIndex != -1){
// //        todoList.splice(todoListIndex,1);
// //    }
//      todoList.splice(todoListIndex,1);
//    return ;
    
    let id = req.query.id;
    console.log(id);
    List.findByIdAndDelete(id,function(err){
        if(err){
            console.log('error in deleting todo list');
            return;
        }
        return;
    });
};
