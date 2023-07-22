const mongoose =require('mongoose');

mongoose.connect('mongodb+srv://shivaminsta64:mongo1234@cluster0.vwnc4jq.mongodb.net/');
const db=mongoose.connection;

db.on('error',console.error.bind(console,'error connecting to mongo db'));

db.once('open',function(){
    console.log('connected to the database to mongo db');
});



module.exports = db;
