
import express from "express";
import dotenv from "dotenv";

import authRoutes from './routes/authRoute.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import printName from "./helpers/printName.js";

const app = express();
const PORT = process.env.PORT || 8000; 

dotenv.config();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.listen(PORT, () => {
	printName();
	connectToMongoDB();
	console.log(`Welcome to NCode server, port ${PORT} ✅✅✅`);
});
