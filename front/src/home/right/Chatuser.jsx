import React from 'react'
import Useconvo from '../../manage/Useconvo.js'
import { useSocketContext } from "../../context/SocketContext.jsx";
import { CiMenuFries } from "react-icons/ci";


function Chatuser() {
    const { selectedConversation } = Useconvo();
    console.log(selectedConversation);
    const { onlineUsers } = useSocketContext();
    const getOnlineUsersStatus = (userId) => {
        return onlineUsers.includes(userId) ? "Online" : "Offline";
    };
    return (
        <>
            <div className=' pl-3 pt-5 pb-3 h-[11vh] flex space-x-4 bg-[#302B32]  duration-300 cursor-pointer'>
                <div className={`avatar online`}>
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div></div>

                <div>
                    {/* <h1 className="text-xl font-bold text-slate-200">{selectedConversation.name}</h1>*/}
                    <h1 className="text-xl font-bold text-slate-200">{selectedConversation.name}</h1>
                    <span className="text-sm text-slate-400"> {getOnlineUsersStatus(selectedConversation._id)}</span>
                </div>

            </div>


        </>
    );

};

    export default Chatuser;
