import express from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.DB_URI)
  .then(() => {
    console.log('DATABASE OK');
  })
  .catch((err) => {
    console.log('DATABASE ERROR', err);
  });

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, friend!!!');
});

app.post('/auth/sign_in', (req, res) => {
  const { email, password } = req.body;

  const token = jwt.sign({
    email,
    password,
  }, 'secret', { expiresIn: '2m' });

  res.json({
    success: true,
    token,
  });
});

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log('SERVER OK');
});
