import React from 'react'
import Useconvo from '../manage/Useconvo.js'
import { useState } from 'react';
import axios from "axios";


const Usesendmsg = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = Useconvo();
    const sendMessages = async (message) => {
        setLoading(true);
        if (selectedConversation && selectedConversation._id) {
            try {
                const res = await axios.post(`/api/message/send/${selectedConversation._id}`, { message }

                );
                setMessages([...messages, res.data]);
                setLoading(false);

            } catch (error) {
                console.log("Error in send Messages: ", error);
                setLoading(false);
            }

        }
    }
    sendMessages();
    return { loading, sendMessages }


}

export default Usesendmsg
