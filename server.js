import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import input from 'readline-sync'
import axios from 'axios'

import './dbConnect.js'
import Chat from './models/chatModel.js';

const server = express()
const PORT = 3000;

server.use(cors());
server.use(express.json());

server.get('/', async (req, res) => {
    try {
        const db = mongoose.connection.db;

        await db.collection("test").insertOne({
            User: "farhan from digital ocean",
            status: "Connected",
            timestamp: new Date()
        });

        return res.json({ message: "Server is running", DB: true })
    } catch (error) {
        console.log(error)
        return res.json({ message: "db insertion test failed" })
    }
})

// server.post('/register', async(req,res))

server.post('/chat', async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        if (!userId || !prompt) {
            console.log("user_id and message are required")
            return res.status(400).json({ message: "user_id and message are required" });
        }

        const history = await Chat.find({ userId }).sort({ timestamp: 1 });

        let conversation = ''
        history.forEach(msg => {
            conversation += `${msg.role}: ${msg.content}`
        });

        conversation += `user: ${prompt}, model:`

        const { data } = await axios.post('http://127.0.0.1:11434/api/generate', 
            {
                model: "llama3.2",
                prompt: conversation,
                stream: false
            })

        const ai_reply = data.response;

        await Chat.insertMany([
            {
                userId,
                role: "user",
                content: prompt
            },
            {
                userId,
                role: "model",
                content: ai_reply
            }
        ]);

        console.log("AI_Reply : ", ai_reply);
        return res.status(200).json({ AI_Reply: ai_reply })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "ai model failed" })
    }
})

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT} 👍`);
})