import { Router } from "express";

const router = Router();

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create Page'});
});

router.post('/create', (req, res) => {
    const newMovieData = req.body;
    console.log(newMovieData);
    
    res.redirect('/');
    // res.end();
})

export default router;