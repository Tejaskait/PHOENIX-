import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
const app = express();
app.use(express.json());
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to database');
}).catch(err => {
    console.error('Error connecting to database', err);
})
app.listen(3000, ()=> {
    console.log('listening on 3000!!');
}); 
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);