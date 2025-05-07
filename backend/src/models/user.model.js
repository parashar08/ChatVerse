import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 50
        },
        bio: {
            type: String,
            default: "",
            trim: true
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
        },
        lastSeen: {
            type: Date,
            default: Date.now
        }
    },
    { timestamps: true }
)

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        try {
            const salt = await bcrypt.genSalt(10);
            this.password = await bcrypt.hash(this.password, salt);
        } catch (error) {
            return next(error);
        }
    }
    next();
});

userSchema.methods.comparePassword = async function (existingUserPassword) {
    try {
        return await bcrypt.compare(existingUserPassword, this.password);
    } catch (error) {
        throw new Error(error);
    }
}

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRES_IN
    });
    return token;
};

export const User = mongoose.model('User', userSchema);