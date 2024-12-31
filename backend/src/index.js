import express from 'express';
import sequelize from './util/database.js';
import cookieParser from 'cookie-parser';
import mainPageRoutes from './routes/main.js';
import votingRoutes from './routes/voting.js';
import newPollRoutes from './routes/newpoll.js';
import authRoutes from './routes/auth.js';
import { ErrorController } from './controllers/error.js';
import './models/associations.js';
import cors from 'cors';

const app = express();
const port = 3001;

sequelize
  .sync()
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cookieParser());
const corsOptions = {
  origin: process.env.CORS_ALLOW_ORIGIN || '*',
  credentials: true,
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/newpoll', newPollRoutes);
app.use('/voting', votingRoutes);
app.use('/', mainPageRoutes);

app.set('view engine', 'ejs');

app.use((req, res) => {
  ErrorController.notFound(req, res);
});

export default app;
