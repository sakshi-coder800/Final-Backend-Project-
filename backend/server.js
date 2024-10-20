import express from "express"; 
import colors from 'colors';   
import dotenv from 'dotenv'; 
import connectDB from "./config/db.js";
import authRoute from './routes/authRoutes.js'
dotenv.config()


const app = express(); // Creating an instance of an Express application
app.use(express.json()); // For parsing application/json

connectDB()

app.use('/api/v1/auth',authRoute)
// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("hii"); // Sending a response when the root URL is accessed
});

const PORT = process.env.PORT || 8080; // Defining the port number
// Starting the server and listening on the defined port
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`.bgRed.white); // Log message indicating the server is running
});
