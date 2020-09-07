//require the mongoose library
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/todo_list_db');

//aquire the connection
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,'error in connecting to db'));


//check the connection
db.once('open',function(){
    console.log('successfully connected to the datbase');
});
