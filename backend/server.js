import express from "express"; 
import colors from 'colors';   
import dotenv from 'dotenv'; 
import connectDB from "./config/db.js";

dotenv.config()


const app = express(); // Creating an instance of an Express application

connectDB()
// Define a route for the root URL
app.get("/", (req, res) => {
    res.send("hii"); // Sending a response when the root URL is accessed
});

const PORT = process.env.PORT || 8080; // Defining the port number
// Starting the server and listening on the defined port
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`.bgRed.white); // Log message indicating the server is running
});
