import React from 'react'
import User from "./User"
import UserGetallUsers from '../../context/UserGetallUsers'

function Multiuser() {
  const [allUsers, loading] = UserGetallUsers();
  console.log()
  return (
    <div className="py-2 flex-Tanishka overflow-y-auto"
     style={{maxHeight:"calc(84vh - 1vh)"}} >
      {allUsers.map((user, index) => (
          <User key={index} user={user} />
        ))}
      </div>
      
      
   
  )
}

export default Multiuser
