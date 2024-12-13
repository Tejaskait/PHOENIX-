import express from 'express';
import { 
  deleteUser, 
  test, 
  updateUser, 
  getUserListings, 
  getUser, 
  getUsers 
} from '../controllers/user.controller.js';
import { verifyToken, verifyAdmin } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test', test);
router.post('/update/:id', verifyToken, updateUser);
router.delete('/delete/:id', verifyToken, verifyAdmin, deleteUser); // Admin-only delete
router.get('/listings/:id', verifyToken, getUserListings);
router.get('/:id', verifyToken, getUser);
router.get('/users', verifyToken, verifyAdmin, getUsers); // Admin-only route to fetch all users

export default router;
