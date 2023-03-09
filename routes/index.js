const router = require('express').Router();

const TodoList = require('../modules/app');

router.get('/',(req,res)=>{
    TodoList.find({},function(err,newTodo){
        if(err){
            console.log("error");
            return;
        }
        return res.render('app',{
            value:newTodo
        });
    });
});

module.exports = router;