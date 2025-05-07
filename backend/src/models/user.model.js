import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 50
        },
        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            minLength: 3,
            maxLength: 50
        },
        phoneNumber: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minLength: 10,
            maxLength: 15
        },
        password: {
            type: String,
            required: true,
            trim: true,
            minLength: 6,
            maxLength: 100
        },
        avatar: {
            type: String,
            default: ""
        },
        isOnline: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
)

export const User = mongoose.model('User', userSchema);
