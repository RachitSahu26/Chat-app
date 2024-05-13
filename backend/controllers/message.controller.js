const chat = require("../Models/chatModel");
const messageModel = require("../Models/messageModel");
const initializeSocket = require('../socket/socket'); // Import Socket.IO initialization function

const { io } = initializeSocket; // Retrieve Socket.IO instance from initialization

const chats = async (req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;

        let conversation = await chat.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        if (!conversation) {
            conversation = await chat.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = await messageModel.create({
            senderId,
            receiverId,
            message
        });

        conversation.messages.push(newMessage._id);
        await conversation.save();

        // Emit the new message to the sender and receiver



        z
        res.status(200).json({
            success: true,
            newMessage,
            message: "Message sent successfully"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error sending message" });
    }
}

const getMessage = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await chat.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages");
        res.status(200).json(conversation?.messages);
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error retrieving messages" });
    }
}

module.exports = { chats, getMessage };
