const jwt = require("jsonwebtoken");
const projectRoute=async(req,res,next)=>{

	const logedInUser = req.cookies.token;
    if (!token) {
        return res.status(401).json({ message: "User is not authenticated" })
    }
    const decode = await jwt.verify(token, process.env.JWT_SECRET)

    if (!decode) {
        return res.status(401).json({ message: "Invailed Token" })
    }

    req.id = decode.existEmail._id
next()
}


module.exports={projectRoute};