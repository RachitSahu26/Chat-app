
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const connectDB = require("./config/db");
const colors = require("colors");
const cookieParser = require('cookie-parser');
const messageRoute=require("./routes/message.routes")
const AuthRoutes= require ("./routes/auth.routes")
const  userRoute=require("./routes/user.routes")
dotenv.config()

const app = express();
connectDB();


app.use(cors());
app.use(cookieParser());

app.use(express.json());
app.get("/", (req, res) => {
    res.send("api is running");
})
// ............routes..........
app.use("/api/auth", AuthRoutes);
app.use("/api/user",userRoute);
app.use("/api/message",messageRoute);




const PORT=process.env.PORT || 4040


app.listen(PORT, console.log(`server is running port${PORT} `));

