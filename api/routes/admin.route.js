import express from 'express';
import { checkAdmin, createAlbum, createSong, deleteAlbum, deleteSong } from '../controllers/admin.controller.js';
import { verifyAdmin, verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/check',verifyToken,verifyAdmin,checkAdmin);
router.post('/songs',verifyToken,verifyAdmin,createSong);
router.delete('/songs/:id',verifyToken,verifyAdmin,deleteSong);
router.post('/albums',verifyToken,verifyAdmin,createAlbum);
router.delete('/albums/:id',verifyToken,verifyAdmin,deleteAlbum);

export default router;

