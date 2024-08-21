import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/Connect.js";
import viewerScheme from "./mongodb/Models/Model.js";

dotenv.config();

const PORT = 8000;

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from server")
})

app.post('/api/post', async (req, res) => {
    try {
        const { name, email, message } = req.body;
         
        await viewerScheme.create({
            name,
            email,
            message,
        })    
        res.status(200).json({ created: true, msg: "Your message is recieved." })
        } catch (error) {
            console.log(error);
            res.status(500).json({ created: false, msg: "Unable to send, Please try again" });
        }
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log("Server has started on port http://localhost:8000")
        })
    } catch (error) {
        console.log(error)
    }
}

startServer();