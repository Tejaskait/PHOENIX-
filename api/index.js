// index.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js';
import userRouter from './routes/user.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
import spotifyRouter from './routes/spotify.route.js';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { exchangeCodeForAccessToken } from './utils/spotify.js';  // Import the utility function

const __dirname = path.resolve();
const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
  },
});

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
}));
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'client/views'));
app.use(express.static(path.join(__dirname, 'client/public')));

io.on('connection', (socket) => {
  socket.on('send-location', (data) => {
    io.emit('receive-location', { id: socket.id, ...data });
  });
  socket.on('disconnect', () => {
    io.emit('user-disconnected', socket.id);
  });
});

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
  .catch((err) => {
    console.error('Error connecting to database', err);
  });

// API Routes
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing', listingRouter);
app.use('/api/spotify', spotifyRouter);

// Route for handling Spotify callback and getting the access token
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ message: 'Authorization code missing' });
  }

  try {
    const { access_token, refresh_token } = await exchangeCodeForAccessToken(code);
    res.json({
      access_token,
      refresh_token,
    });
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch access token', error: err.message });
  }
});

// Static File Serving
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});

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
