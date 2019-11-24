import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { router } from './routes/login';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['some-key'] }));
app.use(router);

app.listen(3000, () => console.log('Server started successfully..'));
