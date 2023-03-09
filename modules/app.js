const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
});


const TodoList = new mongoose.model("Todo",todoSchema);
module.exports = TodoList;
