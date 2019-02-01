import express from 'express';

const router = express.Router();

router.use((req, res, next) => {
    console.log('index');

    next()
})

router.get('/test', (req, res) => res.send('index'));

export default router;