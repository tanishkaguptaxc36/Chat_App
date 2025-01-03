import React, {  useEffect, useState } from 'react'
import Useconvo from '../manage/Useconvo.js';
import axios from "axios"

function useGetMessage() {
  const [loading, setLoading] = useState(false)
  const { messages, setMessages, selectedConversation } = Useconvo()



  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      if (selectedConversation && selectedConversation._id) {
        try {
          const res = await axios.get(`/api/message/get/${selectedConversation._id}` 

          );
          setMessages(res.data);
          setLoading(false);

        } catch (error) {
          console.log("Error in getting message ", error);
        }

      }
    }
    getMessages();
  }, [selectedConversation, setMessages]);

  return {
    messages,
    loading,
  };
}

export default useGetMessage
