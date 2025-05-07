import mongoose from 'mongoose';

async function connectDB() {
    try {
        const conn = await mongoose.connect('mongodb+srv://the69bit:wxiEFpEbEUJxBPFi@cluster0.y44pdx6.mongodb.net/chatDB');
        console.log(`MongoDB Connected! HOST: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
}

export default connectDB;