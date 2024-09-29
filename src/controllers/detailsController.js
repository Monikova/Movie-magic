import { Router } from "express";

import movieService from "../services/movieService.js";

const router = Router();

router.get('/details/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    res.render('details', {movie, title: 'Details Page'});
}); 

export default router; 