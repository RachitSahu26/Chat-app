const { Server } = require("socket.io");

function initializeSocket(server) {

    const io = new Server(server, {
        cors: {
            origin: 'http://localhost:5173',
            methods: ['GET', 'POST'],
            allowedHeaders: ['Access-Control-Allow-Origin']
        },
    });

    const socketUsers = {};

    io.on("connection", (socket) => {
        console.log('user has connected', socket.id);
        // Additional socket.io logic can be added here

        const userId = socket.handshake.query.authId;
        if (userId !== undefined) {
            socketUsers[userId] = socket.id;
        }

        io.emit('getOnlineUsers', Object.keys(socketUsers));

        socket.on('disconnect', () => { 
            delete socketUsers[userId];
            io.emit('getOnlineUsers', Object.keys(socketUsers));
        });
    });

    return io;
}

module.exports = initializeSocket;
