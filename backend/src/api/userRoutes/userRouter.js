import express from "express";

const userRouter = express.Router();

userRouter.get('/',(req,res)=> res.send('Serving from user'));

export default userRouter
