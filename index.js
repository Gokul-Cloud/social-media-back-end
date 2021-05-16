
import express from 'express';

import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/Posts.js';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
app.use(express.json({ limit: '30mb', extended: true }))
app.use(express.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use('/posts', postRoutes);


const PORT = process.env.PORT;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);