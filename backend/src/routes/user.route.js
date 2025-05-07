import express from 'express';
import { signup, login, logout } from '../controllers/user.controller.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

router.route('/signup').post(signup);
router.route('/login').post(login);
router.route('/logout').post(authMiddleware, logout);

export default router;