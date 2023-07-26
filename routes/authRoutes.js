
const express= require('express')
const { registerController, loginController, currentUserController } = require("../controller/authController")
const authMiddleware = require("../middlewares/authMiddleware.js");


const router = express.Router();

//routes
//REGISTER || POST
router.post("/register", registerController);
router.post("/login", loginController);

router.get('/current-user',authMiddleware,currentUserController)

module.exports=router