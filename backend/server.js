import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import input from 'readline-sync'
import axios from 'axios'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

import './dbConnect.js'
import Chat from './models/chatModel.js';
import User from './models/user.js';

dotenv.config()

const server = express()
const PORT = 3000;

server.use(cors());
server.use(express.json());

const generateToken = (payload) => {
    return jwt.sign({ payload }, process.env.SECRET, { expiresIn: "30min" });
}

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
server.post("/register", async (req, res) => {
    try {

        const { email, password } = req.body;

        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            console.log({
                success: false,
                message: "User already exists. Please Login",
                data: existingUser,
            });
            return res
                .status(409)
                .json({
                    success: false,
                    message: "User already exists. Please Login",
                    data: existingUser,
                });
        }

        const saltRounds = Number(process.env.SALTROUNDS);
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const user = await User.create({
            email: email,
            password: hashedPassword,
        })

        console.log({
            success: true,
            message: "User Registered successfully",
            data: user,
        });
        return res
            .status(201)
            .json({
                success: true,
                message: "User Registered successfully",
                data: user,
            });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal server error" })

    }
});

server.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email })
        if (!user) {
            console.log("User not found ! Please Register ")
            return res.status(401).json({ message: "User not found ! Please Register" })
        }
        console.log("User found : ", user);

        let match = await bcrypt.compare(password, user.password);
        if (!match) {
            console.log("Invalid password !");
            return res.status(401).json({ message: "Invalid password ! Try again" });
        }

        let payload = {
            user_id: user._id,
            email: user.email,
            role: user.role,
        };

        const jwtToken = generateToken(payload);
        user.jwtToken = jwtToken;

        await user.save();

        const otherdata = user.toObject()
        delete otherdata.password
        
        console.log("User login Successfull", otherdata);
        return res.status(200).json({ message: "User login Successfull", user: otherdata })

    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: "Internal server error" })
    }
})

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


        await Chat.create({
            prompt: prompt,
            response: ai_reply,
            model: data.model
        })

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