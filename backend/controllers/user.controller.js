const User = require("../Models/userModel");

const otherUserController = async (req, res) => {
    try {
        const loggedInId = req.Id; // Assuming you've set req.userId correctly in your authentication middleware

        if (!loggedInId) {
            return res.status(400).send({ error: "logged in id  is Required" });
        }

        // Fetch all users except the logged-in user
        const otherUsers = await User.find({ _id: { $ne: loggedInId } }).select("-password");

        res.status(200).json({ success: true, data: otherUsers });
    } catch (error) {
        console.error("Error fetching other users:", error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
};

module.exports = otherUserController;
