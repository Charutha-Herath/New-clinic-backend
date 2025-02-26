import { PrismaClient } from "@prisma/client";
import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import {patientRoute} from "./src/routes/patient-routes";



const app = express();
const prisma = new PrismaClient()
dotenv.config()

app.use(express.json());
app.use(cors())
app.use(cookieParser());

app.use('/patient',patientRoute)

async function connectDatabase(){
    try{
        await prisma.$connect();
        console.log('Connect to database');

    }catch (error){
        console.log('Error connecting to database')
    }
}
connectDatabase();
app.listen(3003,(port)=>{
    console.log(`Server running on port 3003`);
})