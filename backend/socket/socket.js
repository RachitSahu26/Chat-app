function initializeSocket(server) {
    const io = require("socket.io")(server, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
            allowedHeaders: ['Access-Control-Allow-Origin']
        },
    });

    const socketUsers = {};

    io.on("connection", (socket) => {
        console.log('user has connected', socket.id);

        const userId = socket.handshake.query.authId;
        if (userId !== undefined) {
            socketUsers[userId] = socket.id;
        }

        io.emit('getOnlineUsers', Object.keys(socketUsers));

        socket.on('disconnect', () => {
            const disconnectedUserId = Object.keys(socketUsers).find(key => socketUsers[key] === socket.id);
            if (disconnectedUserId !== undefined) {
                delete socketUsers[disconnectedUserId];
                io.emit('getOnlineUsers', Object.keys(socketUsers));
            }
        });

        // Handle newMessage event
        socket.on('newMessage', (newMessage) => {
            // Logic to send the message to the appropriate recipient
            const receiverSocketId = socketUsers[newMessage.receiverId];
            if (receiverSocketId) {
                io.to(receiverSocketId).emit('newMessage', newMessage);
            }
        });
    });

    return { io };
}

module.exports = initializeSocket;























