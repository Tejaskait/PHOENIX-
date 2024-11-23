import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(express.json());

app.use(cookieParser());

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
app.use('/api/listing', listingRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });