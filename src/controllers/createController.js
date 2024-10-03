import { Router } from "express";
import Movie from "../models/Movie.js";
import Cast from "../models/Cast.js"

const router = Router();

// app.use(express.urlencoded({extended: false}));

router.get('/movies/create', (req, res) => {
    res.render('create', {title: 'Create Page'});
});

router.post('/movies/create', async (req, res) => {
    const newMovie = await Movie.create(req.body);
    
    res.redirect('/');
});

router.get('/create/cast', (req, res) => {
    res.render('cast-create', {title: 'Create Cast Page'});
}); 

router.post('/create/cast', async (req, res) => {
    const newCast = await Cast.create(req.body);

    res.redirect('/');
})

export default router;