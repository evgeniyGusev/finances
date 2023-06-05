import * as path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { fileURLToPath } from 'url';

import authRouter from './routes/auth.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

// api router
app.use('/api/auth', authRouter);

// static files
const staticDir = path.join(__dirname, '..', 'client', 'dist');

app.use(express.static(staticDir));

// frontend router
app.get('*', (req, res) => res.sendFile(path.join(staticDir, 'index.html')));

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
