import React from 'react'
import Useconvo from '../../manage/Useconvo.js'
import { useSocketContext } from "../../context/SocketContext.jsx";


function User({ user }) {
    const { selectedConversation, setSelectedconvo } = Useconvo();
    const isSelected = selectedConversation?._id === user._id;
    const { socket, onlineUsers } = useSocketContext();
    const isOnline = onlineUsers.includes(user._id);
    return (
        <div className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`} onClick={() => setSelectedconvo(user)}>
            <div className="flex space-x-4 px-8 py-7 hover:bg-violet-900 cursor-pointer">
                <div className={`avatar ${isOnline ? "Active" : ""}`}> {/*dynamic krne k lie braces die avatar pe*/}
                    <div className="w-12 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold'>{user.name}</h1>
                    <span>{user.email}</span>
                </div>

            </div>
        </div>

    );
}

export default User;
