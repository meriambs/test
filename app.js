const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');
const personRouter = require ('./routes/Post');
const cors = require('cors')
//middelwar thing to execute things while we enter an other page 
//import routes
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
// you can create routes
app.get('/', (req,res)=>{
    res.send('heyyy test home portefolio')
}); 
//**********/ connect


//*********Install and setup mongoose::
dotenv.config({path:__dirname + '/config/.env'});
mongoose.connect(process.env.MONGO_URI,{useFindAndModify: false,
     useNewUrlParser: true, 
     useUnifiedTopology: true}).then(()=>{
    console.log('connected you are using the port 3023')
}).catch(()=>{
    console.log("not connected")
})
//routes
app.use('/users', personRouter);
//how to startl listen 
app.listen(3023);