
const expressAsyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const asyncHandler = require("express-async-handler");
const registerUser = expressAsyncHandler(async (req, res) => {
  // Your registerUser function implementation here
const generateToken = require("../config/genrateToken")

const { name, email, password, gender} = req.body;
  
  if (!name || !email || !password || !gender ) {
    res.status(400);
    throw new Error("Please Enter all the Feilds");
  }
  
  const userExists = await User.findOne({ email });
  
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }
  
  const user = await User.create({
    name,
    email,
    password,
    gender,
  });
  
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not found");
  }
  
  


});







// ........................login Controller.....

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid Email or Password");
  }
});




module.exports = {  registerUser, loginUser };