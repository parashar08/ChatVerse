import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        chatType: {
            type: String,
            enum: ["single", "group"],
            required: true,
        },
        singleChat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Chat",
        },
        groupChat: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "GroupChat",
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
            text: {
                type: String,
                trim: true,
            },
            media: [
                {
                    url: String,
                    type: {
                        type: String,
                        enum: ["image", "video", "audio", "file"],
                    },
                    fileName: String,
                    size: Number,
                    duration: Number,
                }
            ],
        },
        readBy: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ],
        deletedFor: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            }
        ]
    },
    { timestamps: true }
)

export const Message = mongoose.model("Message", messageSchema);
