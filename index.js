const express = require('express');
const port = 8000;
const app = express();

//use express router
app.use('/',require('./routes/index'));

//setup view engine
app.set('view engine','ejs');
app.set('views','views');



app.use(express.static('assets')); //middleware

app.listen(port,function(err){
    if(err){
        console.log(`Error in running the server :${err}`);
        return;
    }
    console.log(`Server is running on Port : ${port}`);
});