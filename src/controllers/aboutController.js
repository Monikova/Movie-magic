import { Router } from "express";

const router = Router();

router.get('/about', (req, res) => {
    res.render('about', {title: 'About Page'}); 
});

export default router;