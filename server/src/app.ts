import express  from 'express';
import connect from './config/db';
import dotenv from 'dotenv';
import {user_signup_control} from "./Controller/UserControl";

dotenv.config();
const app = express();

app.use(express.json());

app.use('/signup', user_signup_control);


app.listen(process.env.port, () => {
  connect();
  console.log('Server is running');
});