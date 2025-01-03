import React from 'react'

function Message({ message }) {
    const authUser = JSON.parse(localStorage.getItem("chat-e-app"));
    const itsme = message.senderId === authUser.user._id;
    const chatName = itsme ? "chat-end" : "chat-start";
    const chatcolor = itsme ? "bg-blue-400" : "";
    const createdAt = new Date(message.createdAt);
    const formattedTime = createdAt.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
    });
        return(
       <div>
        <div className='p-4' >
            <div className={`chat ${chatName}`}>
                <div className={`chat-bubble text-black ${chatcolor}`}>
                    {message.message}
                </div>
                <div className="chat-footer">{formattedTime}</div>
            </div>
        </div >
      </div >         
        

    );
}

export default Message
