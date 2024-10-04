import { Router } from "express";

import homeController from './controllers/homeController.js';
import aboutController from './controllers/aboutController.js';
import createController from './controllers/createController.js';
import detailsController from './controllers/detailsController.js';

const router = Router();

router.use(homeController);
router.use(aboutController);
router.use(createController);
router.use(detailsController);

router.all('*', (req, res) => {
    res.render('404');
});

export default router;