import express from 'express';
import jwt from 'jsonwebtoken';
import simplecrypt from 'simplecrypt';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { validationResult } from 'express-validator';

import { signUpValidation } from './validations/SignUp.js';
import UserModel from './models/User.js';

dotenv.config();

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('DATABASE OK');
  })
  .catch((err) => {
    console.log('DATABASE ERROR', err);
  })

const sc = simplecrypt();

const app = express();

app.use(express.json());

app.post('/auth/sign_up', signUpValidation, async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
  }

  const { email, password,  fullName, avatarUrl } = req.body;

  const passwordHash = sc.encrypt(password);

  const doc = new UserModel({
	  email,
	  passwordHash,
    fullName,
    avatarUrl,
  });

  const user = await doc.save();

  res.json(user);
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log('SERVER OK');
});
