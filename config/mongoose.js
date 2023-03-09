const mongoose =require('mongoose');

mongoose.connect('mongodb://0.0.0.0/todolist_db');
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to mongo db'));

db.once('open',function(){
    console.log('connected to the database to mongo db');
});



module.exports = db;
