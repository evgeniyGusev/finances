import { Router } from 'express';

import { signInController, signUpController } from '../controllers/auth.js';
import { signUpValidation, signInValidation } from '../validations/auth.js';

const authRouter = new Router();

// /sign_up

authRouter.post('/sign_up', signUpValidation, signUpController);
authRouter.post('/sign_in', signInValidation, signInController);

// /sign_in

export default authRouter;
