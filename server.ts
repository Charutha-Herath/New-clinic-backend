import express from "express";



const app = express();

app.use(express.json());


app.listen(3003,(port)=>{
    console.log(`Server running on port 3003`);
})