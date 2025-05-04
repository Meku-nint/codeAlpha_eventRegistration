import express from 'express';
import dotenv from 'dotenv';
import { connectDb } from './config/connectDb.js';
import  eventRouter  from './route/routes.js';
dotenv.config();
const app=express();
const PORT=process.env.PORT||5000;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api",eventRouter);
// Connect to the database

app.listen(PORT,async()=>{
    await connectDb();
    console.log(`Server is running on port ${PORT}`);
})