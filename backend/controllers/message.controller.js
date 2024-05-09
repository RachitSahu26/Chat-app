const chat = require("../Models/chatModel");
const messageModel = require("../Models/messageModel")



const chats = async (req, res) => {
    try {
        const senderId = req.id;
        console.log("sender id backend", senderId)
        const receiverId = req.params.id;
        console.log("sender id frontend", receiverId)
        const { message } = req.body;

        // Find the conversation between sender and receiver
        let conversation = await chat.findOne({
            participants: { $all: [senderId, receiverId] }
        });

        // If conversation doesn't exist, create a new one
        if (!conversation) {
            conversation = await chat.create({
                participants: [senderId, receiverId]
            });
        }

        // Create a new message
        const newMessage = await messageModel.create({
            senderId,
            receiverId,
            message
        });

        // Add the new message to the conversation
        conversation.messages.push(newMessage._id);
        await conversation.save();

        // Return success response
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
        return res.status(200).json(conversation?.messages);
    } catch (error) {
        console.log(error);
    }
}
module.exports = { chats, getMessage };