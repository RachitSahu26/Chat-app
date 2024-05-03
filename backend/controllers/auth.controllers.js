
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const generateToken = require("../config/genrateToken");
const { hashpassword, comparePassword } = require("../helper/authHelper");



const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.status(400).send({ error: "Name is Required" });
    }
    if (!email) {
      return res.status(400).send({ error: "Email is Required" });
    }
    if (!password) {
      return res.status(400).send({ error: "Password is Required" });
    }

    // checking existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).send({
        success: false,
        message: "Already registered, please login",
      });
    }

    // hashedpassword
    const hashedPassword = await hashpassword(password);
    const user = await new User({
      name,
      email,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Registration",
      error,
    });
  }
};





// ........................login Controller.....

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).send({ error: "All fields are Required" });
    }

    // Email Validation
    if (!email.includes("@")) {
      return res.status(400).send({
        success: false,
        message: "Please enter a correct email",
      });
    }

    // Find Unique User with email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registered",
      });
    }

    // Matching user password to hashed password with bcrypt.compare()
    const doMatch = await comparePassword(password, user.password);

    if (!doMatch) {
      return res.status(401).send({
        success: false,
        message: "Invalid password",
      });
    }

    // Password matches, user is authenticated
    // Generate JWT token
    const token = generateToken(user._id);

    // Set the JWT token in a cookie

    res.status(200).send({
      success: true,
      message: "Login successful",
      user: user,
      token,
    });
    
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};



module.exports = { registerController, loginUser };