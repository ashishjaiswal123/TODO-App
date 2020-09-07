const express = require('express');
const router = express.Router();
const homeController = require('../controller/home_controller');
const  route = require('./user');
// const todoController = require('../controller/todo_controller');

console.log('router is loaded');
router.use(express.urlencoded());

router.get('/',homeController.home);
router.post('/create-todo',homeController.create);
router.get('/delete-todo',homeController.delete);
router.use('/user',require('./user'));


module.exports = router;