import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';


dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

connectDB();