
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes= require("./routes/userRoutes") 
dotenv.config()

const app = express();
connectDB();

app.use(express.json());
app.get("/", (req, res) => {
    res.send("api is running");
})

app.use("/api/user", userRoutes);
const PORT=process.env.PORT || 4040


app.listen(PORT, console.log(`server is running port${PORT} `));

