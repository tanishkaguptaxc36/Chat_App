import React, { useEffect } from "react";
import { useSocketContext } from "./SocketContext";
import Useconvo from "../manage/Useconvo.js";

const useGetSocketMessage = () => {
  const { socket } = useSocketContext();
  const { messages, setMessages } = Useconvo();

  useEffect(() => {
    socket.on("newMessage", (newMessage) => {
      
      setMessages([...messages, newMessage]);
    });
    return () => {
      socket.off("newMessage");
    };
  }, [socket, messages, setMessages]);
};
export default useGetSocketMessage;