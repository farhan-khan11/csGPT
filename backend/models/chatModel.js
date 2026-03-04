import express from "express";
import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    userId: {
        type:String
    },
    prompt: {
        type: String
    },
    response: {
        type: String
    },
    model:{
        type : String
    },
    latency_ms: {
        type: String
    },
    tokens_generated : {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Chat = mongoose.model("Chat", chatSchema);

export default Chat