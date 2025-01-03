import React, { useState } from 'react'
import { IoMdSend } from "react-icons/io";
import Usesendmsg from '../../context/Usesendmsg.js';



function Writemsg() {
    const { loading, sendMessages } = Usesendmsg();
    const [message, setMessages] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendMessages(message);
        setMessages("");
        
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className='flex space-x-3 h-[11vh] text-center bg-[#D1C2E0]'>
                    <div className="w-[70%]">
                        <input
                            type="text"
                            value={message}
                            onChange={(e) => {
                                setMessages(e.target.value);
                            }}
                            placeholder="Type here"
                            className="rounded-lg w-full bg-[#302B32] text-white w-full flex py-3 px-3 mt-4 rounded-xl items-center grow outline-none mt-1 ml-4" />
                    </div>
                    <button
                        type="submit"
                        className='button button-primary text-3xl pb-4 pl-4 pt-3'
                        disabled={loading}>
                        <IoMdSend />
                    </button>

                </div>
            </form>

        </>
    )
}

export default Writemsg
