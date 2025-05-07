import mongoose from 'mongoose';

async function connectDB() {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected! HOST: ${conn.connection.host}`);
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1); 
    }
}

export default connectDB;