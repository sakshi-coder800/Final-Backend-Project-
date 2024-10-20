
import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js";

// Create a router object
const router = express.Router();

// REGISTER || METHOD POST 
router.post('/register', registerController);

// LOGIN || METHOD POST 
router.post("/login", loginController);

// TEST ROUTE
router.get("/test", testController); 

// Export the router
export default router;
