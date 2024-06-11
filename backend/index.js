import express from "express";
import { dbConnect } from "./database/dbConnect.js";
import dotenv from "dotenv"
import messageRouter from "./router/messageRouter.js";
import cors from "cors"
const app = express();

dotenv.config();
dbConnect();
const corsOptions = {
    origin: [`${process.env.FRONTEND_URL}`],
    credentials: true, 
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1/message",messageRouter);


app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});

export default app;