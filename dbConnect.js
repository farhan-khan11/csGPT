import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config()
const MONGODB= process.env.MONGODB_URL

async function connectDB() {
    try {
        let dbName = 'csGPT'
        await mongoose.connect(`${MONGODB}${dbName}`)
        console.log('Connected to Mongodb');
    } catch (error) {
        console.log(error)
    }
}

connectDB();

export default connectDB