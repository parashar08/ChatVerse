import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));
app.use(cookieParser());

import userRoutes from './routes/user.route.js';

app.use('/api/user', userRoutes);

export default app;