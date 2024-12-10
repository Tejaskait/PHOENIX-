import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const __dirname = path.resolve();

const app = express();
const server = createServer(app); // Replace http.createServer
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // React app's URL during development
    methods: ['GET', 'POST'],
  },
}); // Replace socketio(server)
app.use(cors({
  origin: 'http://localhost:5173', // React app's URL
  methods: ['GET', 'POST'],
}));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'client/views')); // Point to the views directory
app.use(express.static(path.join(__dirname, 'client/public')));

io.on('connection',function(socket){
  socket.on('send-location',function(data){
    io.emit('receive-location',{id: socket.id, ...data});

  })
  socket.on('disconnect',function(){
    io.emit('user-disconnected', socket.id);

  })
  
})
// Middleware
app.use(express.json());
app.use(cookieParser());

// Environment Configuration
dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to database');
  })
  .catch(err => {
    console.error('Error connecting to database', err);
  });

// API Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);

app.get('/tracker', (req, res) => {
  res.render('index');
});
// Static File Serving

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

// Welcome Route


// Error Handling Middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start Server
server.listen(3000, () => {
  console.log('Listening on 3000!!');
});
