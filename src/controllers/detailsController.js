import { Router } from "express";

const router = Router();

router.get('/details/:id', (req, res) => {
    res.render('details', {title: 'Details Page'});
});

export default router; 