
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from './routes/authRoute.js';
import messageRoutes from './routes/messageRoute.js';
import userRoutes from './routes/userRoute.js';

import connectToMongoDB from './db/connectToMongoDB.js';

import printName from "./helpers/printName.js";

const app = express();
const PORT = process.env.PORT || 8000; 

dotenv.config();

app.use(express.json());
app.use(cookieParser()); // middleware

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
	printName();
	connectToMongoDB();
	console.log(`Welcome to NCode server, port ${PORT} ✅✅✅`);
});
