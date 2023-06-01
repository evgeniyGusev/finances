import { validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModel from '../models/User.js';

// signUp
export const signUpController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, fullName, avatarUrl } = req.body;

    const salt = bcryptjs.genSaltSync(10);
    const passwordHash = bcryptjs.hashSync(password, salt);

    const newUser = new UserModel({
      email,
      passwordHash,
      fullName,
      avatarUrl,
    });

    await newUser.save();

    res.json({
      success: true,
    });
  } catch (e) {
    if (e.keyPattern.email) {
      return res.status(400).json({ message: 'Email уже используется' });
    }

    res.status(400).json(e);
  }
};

// signIn
export const signInController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      if (bcryptjs.compareSync(password, user.passwordHash)) {
        const token = jwt.sign(
          {
            id: user._id,
          },
          process.env.JWT_SECRET,
          {
            expiresIn: '1m',
          }
        );

        const userRes = {
          id: user._id,
          token,
          fullName: user.fullName,
          avatarUrl: user.avatarUrl,
          email: user.email,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        };

        return res.json({
          success: true,
          user: userRes,
        });
      }

      return res.status(400).json({ message: 'Неверный пароль' });
    }

    return res.status(400).json({ message: 'Пользователь не найден' });
  } catch (e) {
    res.status(400).json(e);
  }
};

export const currentUserController = async () => {};
