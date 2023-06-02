import { Router } from 'express';

import {
  signInController,
  signUpController,
  signOutController,
  currentUserController,
} from '../controllers/auth.js';

import { signUpValidation, signInValidation } from '../validations/auth.js';
import checkAuth from '../utils/checkAuth.js';

const authRouter = new Router();

authRouter.post('/sign_up', ...signUpValidation, signUpController);
authRouter.post('/sign_in', ...signInValidation, signInController);
authRouter.get('/sign_out', checkAuth, signOutController);
authRouter.get('/current_user', checkAuth, currentUserController);

export default authRouter;
