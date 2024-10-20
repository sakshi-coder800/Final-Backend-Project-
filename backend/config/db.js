import morgan from "morgan";
import mongoose from "mongoose";
import colors from "colors";
import dotenv from 'dotenv'; 
dotenv.config()

const connectDB=async()=>{
    try {
const conn = await mongoose.connect(process.env.DBConnection)       
const conn = await mongoose.connect(process.env.MONGO_URI)       
console.log(`Connected to Mongodb Database ${conn.connection.host} `); 
    } catch (error) {
        console.log(`Database connection error ${error}`)
    }
}


//     try {
// const  connDB = await mongoose.connect(()=>{
        
//     } catch (error) {
        
//     }
// })

export default connectDB;