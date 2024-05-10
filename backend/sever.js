const express = require("express");
const http = require("http");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");
const colors = require("colors");
const cookieParser = require('cookie-parser');
const messageRoute = require("./routes/message.routes");
const AuthRoutes = require("./routes/auth.routes");
const userRoute = require("./routes/user.routes");
const initializeSocket = require("./socket/socket");

dotenv.config();

const app = express();
const server = http.createServer(app); // Create an HTTP server

connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("api is running");
});

// Routes
app.use("/api/auth", AuthRoutes);
app.use("/api/user", userRoute);
app.use("/api/message", messageRoute);

// Initialize Socket.IO
const io = initializeSocket(server);

const PORT = process.env.PORT || 4040;

server.listen(PORT, console.log(`Server is running on port ${PORT}`));
