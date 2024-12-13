import express from 'express';

const router = express.Router();


router.get('/',(req,res) => {
    console.log('GET request to stats');
    res.send('GET request to stats');
});

export default router;

