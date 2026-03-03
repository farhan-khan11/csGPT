import express from "express";
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    userId: {
        type: String
    },
    role: {
        type: String
    },
    content: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Chat = mongoose.model("Chat", chatSchema);

export default Chat