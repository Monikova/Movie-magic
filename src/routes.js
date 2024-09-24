import { Router } from "express";

import homeController from './controllers/homeController.js';
import aboutController from './controllers/aboutController.js';

const router = Router();

router.use(homeController);
router.use(aboutController);

export default router;