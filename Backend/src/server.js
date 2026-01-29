import app from "./app.js";
import connectDB from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const PORT = process.env.PORT || 8085;


app.listen(PORT,()=>{
    console.log(`server is running https://localhost:${PORT} `)
})