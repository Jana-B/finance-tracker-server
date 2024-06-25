import express, {Express} from "express";
import mongoose from "mongoose";
import financialRecordRouter from "../src/routes/financial-records"
import cors from "cors";
import * as dotenv from 'dotenv';
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3001;
const DB = process.env.DB

app.use(express.json());
app.use(cors())


app.use("/financial-records", financialRecordRouter)


const mongoURI: string = DB as string;

mongoose.connect(mongoURI)
.then(() => console.log("CONNECTED TO MONGODB!"))
.catch((err)=> console.error("Failed to connect to MongoDB:", err))

app.listen(port, () => {
    console.log(`Server running on port ${port}.`)
})