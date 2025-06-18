import  express from 'express';
import dotenv from 'dotenv';
import { app } from './app.js';
import connectDB from './src/db/connect.js';



dotenv.config({
    path: './.env'
})


const PORT = process.env.PORT || 4000;

connectDB()
.then(() => {
   app.listen(PORT,() => {
    console.log(`Server is running on  ${PORT}`);
})
})
.catch((err) => {
    console.log("mongodb connection failed : !!",err)
})




