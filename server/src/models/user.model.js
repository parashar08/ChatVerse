import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLenght: 4,
            maxLenght: 32
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
            minLenght: 4,
            maxLenght: 32
        },
        password: {
            type: String,
            required: true,
            minLenght: 4,
            maxLenght: 50
        },
        phone: {
            type: String,
            required: true,
            unique: true,
        },
        avatar: {
            type: String,
            default: "",
        },
        isOnline: {
            type: Boolean,
            default: false,
        },
        lastSeen: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);