
const jwt = require("jsonwebtoken");

const protectRoute = (req, res, next) => {
    // Check if the token exists in the request headers or cookies
    const tokenFromHeader = req.headers.authorization;
    const tokenFromCookie = req.cookies.token;

    console.log("Token from header:", tokenFromHeader);
    console.log("Token from cookie:", tokenFromCookie);

    const token = tokenFromHeader || tokenFromCookie;

    if (!token) {
        return res.status(401).json({ message: "Unauthorized: No token provided" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Set the user id from the decoded token to the request object
        req.userId = decoded.userId;

        next(); // Call next middleware
    } catch (error) {
        console.error("Error verifying token:", error);
        return res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
};

module.exports = protectRoute;
