import express from 'express';

const router = express.Router();


router.get('/',(req,res) => {
    res.send('GET request to album');
});

export default router;

