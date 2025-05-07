import mongoose from "mongoose";

const groupChatSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            minLength: 2,
            maxLength: 32,
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minLength: 2,
            maxLength: 200,
        },
        avatar: {
            type: String, 
            default: "",
        },
        admin: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        ],
        lastMessage: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
        },
    },
    { timestamps: true }
)

export const GroupChat = mongoose.model("GroupChat", groupChatSchema);