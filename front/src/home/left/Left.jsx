import React from 'react'
import Search from './Search'
import Multiuser from './Multiuser'

function Left() {
  return (
    <div className='w-full  bg-[#302B32] text-white '>
      <h1 className="font-bold text-3xl p-2 px-11 ">Chats</h1>
      
      <Search/>
      <hr></hr>
      <Multiuser/>
    </div>
    
  ); 
}

export default Left
