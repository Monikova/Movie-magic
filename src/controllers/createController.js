import { Router } from "express";
import Movie from "../models/Movie.js";

const router = Router();

// app.use(express.urlencoded({extended: false}));

router.get('/movies/create', (req, res) => {
    res.render('create', {title: 'Create Page'});
});

router.post('/movies/create', async (req, res) => {
    const newMovie = await Movie.create(req.body);
    
    res.redirect('/');
});

export default router;