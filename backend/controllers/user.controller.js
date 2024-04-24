const User = require("../Models/userModel");

const otherUserController=async(req,res)=>{
    const logedInId=req.id;
    const otherUser=await User.find({})
    
}