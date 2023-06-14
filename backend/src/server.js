import express from "express";
import userRoute from './api/userRoutes/userRouter.js';
import dotenv from 'dotenv';




dotenv.config();


const port = process.env.PORT || 5000;


const app = express();

app.use('/api/users',userRoute)

app.listen(port,()=> console.log(`server started ${port}`));