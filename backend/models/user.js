import express from "express";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    jwtToken: {
        type: String
    }
})

const User = mongoose.model("user", userSchema);

export default User