const express = require("express")
const router = express.Router();
const otherUserController =require("../controllers/user.controller")
const protectRoute= require("../middleware/protectRoute")
router.get("/", protectRoute, otherUserController);


module.exports = router;