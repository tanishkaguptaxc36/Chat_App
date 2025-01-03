import mongoose from "mongoose";
import User from "../models/userscehma.js"
import Message from "../models/message_model.js"

const convoSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Message',
            default: [],
        }]
},
    { timestamps: true }
);

const Conversation = mongoose.model("conversation", convoSchema);

export default Conversation;