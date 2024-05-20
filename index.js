import express from "express";
import cors from "cors";
import { adminRouter } from "./Routes/AdminRoutes.js";
import dotenv from "dotenv";


dotenv.config();

const app = express();

app.use(cors({
    // origin: ['http://localhost:5173'],
    origin: ['https://alumni-client.vercel.app/'],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE'],
    credentials: true,
}));

app.use(express.json())

app.use("/auth", adminRouter);
// app.use(express.static('Public'));
app.use('/Public', express.static('Public'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
