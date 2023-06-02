import { validationResult } from 'express-validator';
import bcryptjs from 'bcryptjs';

import UserModel from '../models/User.js';
import { generateToken } from '../utils/token.js';

// signUp
export const signUpController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Невалидные данные' });
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

    res.status(201).json({
      success: true,
    });
  } catch (e) {
    if (e.keyPattern.email) {
      return res.status(400).json({ message: 'Email уже используется' });
    }

    res.status(500).json({ error: e.message });
  }
};

// signIn
export const signInController = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });

    if (user) {
      if (bcryptjs.compareSync(password, user.passwordHash)) {
        const token = generateToken(user._id);

        const { passwordHash, ...userRes } = user._doc;

        return res
          .cookie('access_token', token, {
            httpOnly: true,
          })
          .json({
            success: true,
            user: userRes,
          });
      }

      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    return res.status(400).json({ message: 'Неверный логин или пароль' });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// signOut
export const signOutController = async (req, res) => {
  try {
    return res.clearCookie('access_token').json({
      success: true,
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// currentUser
export const currentUserController = async (req, res) => {
  try {
    const user = await UserModel.findById(req.userId);

    if (!user) {
      return res
        .status(400)
        .json({ access: false, message: 'Пользователь не найден' });
    }

    const { passwordHash, ...userRes } = user._doc;

    return res.json({
      access: true,
      user: userRes,
    });
  } catch (e) {
    res.status(500).json({ access: false, error: e.message });
  }
};
