import  express  from 'express';
import mongoose from "mongoose";
const app = express();
const port = 7000;
const dotenv = require("dotenv")
app.use(express.urlencoded());
dotenv.config()

// use router
import router from './route/index.js';

app.use('/',router);
app.use(express.static('Assets'));



// set up the view engine
app.set('view engine','ejs');
app.set('views', './views');







app.listen(port,function(err){
    if(err){
        console.log("therer is error in serfer");
    }
    console.log("yup!! server is ruuning on port",port);
})