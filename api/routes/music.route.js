import express from 'express';
import { getPlaylists } from '../controllers/music.controller.js';

const router = express.Router();

// Route for Spotify playlists
router.get('/playlists', getPlaylists);

export default router;

