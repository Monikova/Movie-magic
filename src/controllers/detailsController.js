import { Router } from "express";

const router = Router();

router.get('/details/:movieId', (req, res) => {
    // res.render('details1', {title: 'Details Page'});
    res.render('details', {title: 'Details Page'});
});

export default router; 