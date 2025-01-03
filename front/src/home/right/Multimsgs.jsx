import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessage from '../../context/useGetMessage.js'
import Loading from '../../components/Loading.jsx'
import useGetSocketMessage from "../../context/useGetSocketMessage.jsx";

function Multimsgs() {
  const { messages,
    loading } = useGetMessage()
    useGetSocketMessage();
  console.log(messages);
  const lastMsgRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      if (lastMsgRef.current) {
        lastMsgRef.current.scrollIntoView({
          behavior: "smooth",
        })
      }

    }, 100)
  }, [messages]);
  return (

    <div
      className="flex-1 overflow-y-auto"
      style={{ minHeight: "calc(89vh - 11vh)" }}
    >

      {loading ? (<Loading></Loading>) : (
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMsgRef}>
            <Message message={message} />
          </div>

        ))
      )}



      {!loading && messages.length === 0 && (
        <div><p className='text-center font-bold mt-[10%]'>
          Say Hi</p>
        </div>
      )}
    </div>

  )
}









export default Multimsgs
