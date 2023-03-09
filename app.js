const express =require('express');

const db =require('./config/mongoose');
const port =9000;

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.static("./assets"));


app.set("view engine","ejs");


app.use(require('./routes/index'));
app.use(require('./routes/todo'));




app.listen(port,(err)=>{
    if(err){
        console.log('error on express server');
    }
    console.log('Server successfully running on port : ',port);
})