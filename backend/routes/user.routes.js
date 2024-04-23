const express = require("express")
const router = express.Router();
const userController =require("../controllers/user.controller")
const protectRoute = require("../middleware/protectRoute")
router.post("/", protectRoute, userController);


module.exports = router;