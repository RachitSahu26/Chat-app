
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");

const { hashpassword, comparePassword } = require("../helper/authHelper");



const registerController = async (req, res) => {


  try {
    const { name, email, password, } = req.body;

    if (!name) {
      return res.send({ error: "Name is Required" });
    }
    if (!email) {
      return res.send({ error: "Email is Required" });
    }
    if (!password) {
      return res.send({ error: "Password is Required" });
    }

    // checking existing user
    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    // hashedpassword

    const hashedPasswrod = await hashpassword(password);
    const user = await new User({
      name,
      email,

      password: hashedPasswrod,

    }).save()

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });




  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }














};





// ........................login Controller.....

const loginUser = async (req, res) => {


  try {

    const { email, password } = req.body;


    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    // Email Validation
    if (!email.includes("@")) {
      return res.status(400).send({
        success: false,
        message: "please Enter Correct email",
      });
    }

    // Find Unique User with email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }

    // Matching user password to hash password with bcrypt.compare()
    const doMatch = await comparePassword(password, user.password);

    if (!doMatch) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Set the JWT token in a cookie
    res.cookie("token", token, {
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      httpOnly: true,
      sameSite: "strict",
      // Add other cookie options if needed (e.g., secure: true)
    });

    
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,

      },
      token: token,
    });
  }

  catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in Login",
      error,
    })
  }
};



module.exports = { registerController, loginUser };