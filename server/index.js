import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import authRouter from './routes/auth.js';

dotenv.config();

const app = express();

app.use(express.static('../client/dist'));

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use('/api/auth', authRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    app.listen(4444, (err) => {
      if (err) {
        return console.log(err);
      }

      console.log('SERVER OK');
    });
  })
  .catch((err) => {
    console.log('DATABASE ERROR', err);
  });
