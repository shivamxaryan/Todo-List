const router = require('express').Router();

const TodoList = require('../modules/app');


router.post('/add/todo',(req,res)=>{
    const val = req.body.todo;
    const description = req.body.description;
    // console.log(val);
    TodoList.create({
        todo:val,
        description:description
    },(err,newTodo)=>{
        if(err){
            console.log('error on creation',err);
            return;
        }
        console.log(newTodo);
        return res.redirect('back');
    })

});


router.get('/delete/todo',(req,res)=>{
    let id=req.query.id;

    TodoList.findByIdAndDelete(id,function(err){
        if(err){
            console.log("error");
            return;
        }
        return res.redirect('back');
    });

});


module.exports=router;