import { Router } from "express";
import authService from "../services/authService.js";

const router = new Router(); 

router.get('/register', (req, res) => {
    res.render('register', {title: 'Register Page'}); 
});

router.post('/register', async (req, res) => {
    const {email, password, rePassword} = req.body;

    await authService.register(email, password);
    
    res.redirect('/'); 
});

router.get('/login', (req, res) => {
    res.render('login', {title: 'Login Page'});
});

export default router; 