import express from "express";
import cookieParser from 'cookie-parser';

const mainPageRoutes = require('./routes/main');
const votingRoutes = require('./routes/voting');
const newPollRoutes = require('./routes/newpoll');

const app = express();
const port = 3001;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use(express.json());
app.use(cookieParser());

app.use('/newpoll', newPollRoutes);
app.use('/voting', votingRoutes);
app.use('/', mainPageRoutes);
