const express = require('express');
const app = express();

//dotenv
require('dotenv').config();

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://samiride:sami_ride@samiridecluster.kwkbqri.mongodb.net/samiride');


mongoose.connection.once('open',()=>{
    console.log('mongoose connected');
});

mongoose.connection.on('error',()=>{
    console.log('Mongoose connection failed '+error.message);
    
});

//api's
/*app.use('/',(req,res)=>{
    res.send('Home page');
});*/

//user route
const userRoute = require('./route/UserRoute');
app.use('/api',userRoute);

//server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});