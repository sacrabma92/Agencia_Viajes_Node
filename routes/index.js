import express from 'express';

const router = express.Router();


router.get('/', (req, res) => { // req - lo que enviamos : res - lo que express nos responde
    res.render('inicio');
});
router.get('/nosotros', (req, res) => {
    res.render('nosotros');
});


export default router;