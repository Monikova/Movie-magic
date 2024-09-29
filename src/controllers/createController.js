import { Router } from "express";

const router = Router();

router.get('/movies/create', (req, res) => {
    res.render('create', {title: 'Create Page'});
});

router.post('/movies/create', (req, res) => {
    const newMovieData = req.body;
    console.log(newMovieData);
    
    res.redirect('/');
    // res.end();
})

export default router;