import { Router } from "express";

import movieService from "../services/movieService.js";

const router = Router();

router.get('/', async (req, res) => {
    const movies = await movieService.getAll();
    res.render('home', {movies, title: 'Catalog Page'}); 
    // res.render('home', {movies, title: pageTitles.home}); 
});

router.get('/search', async (req, res) => {
    const movies = await movieService.getAll();
    res.render('home', {movies, title: 'Search Page', search: true}); 
}); 

export default router;