import { Router } from "express";

const router = Router();

router.get('/about', (req, res) => {
    res.render('about', {title: 'About Page'}); 
    // res.render('about', {title: pageTitles.about}); 
});

export default router;