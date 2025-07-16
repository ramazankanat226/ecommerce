import { Router } from 'express';
import { authController } from '@/controllers/auth.controller';

const authRouter = Router();

// POST /api/auth/register
authRouter.post('/register', authController.register);

// POST /api/auth/login
authRouter.post('/login', authController.login);

// POST /api/auth/logout
authRouter.post('/logout', authController.logout);

// GET /api/auth/profile
// Bu route'u daha sonra bir middleware ile koruyacağız
authRouter.get('/profile', authController.getProfile);

export default authRouter; 