import { Router } from "express";

import movieService from "../services/movieService.js";

const router = Router();

router.get('/details/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    res.render('details', {movie, title: 'Details Page'});
}); 

router.get('/attach/cast/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    const cast = await movieService.getCast();
    res.render('castAttach', {movie, cast, title: 'Attach Cast Page'}); 
});

export default router; 