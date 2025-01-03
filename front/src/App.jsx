import React from 'react'
import Left from './home/left/Left.jsx'
import Right from './home/right/Right.jsx'
import Logout from './home/left1/Logout.jsx'
import Signup from './components/Signup'
import Login from './components/Login'
import { useAuth } from './context/AuthProvider.jsx'
import { Routes, Route, Navigate } from 'react-router-dom'
import Loading from './components/Loading.jsx'



function App() {
  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);
  return (

    <>


      <Routes>
        <Route path="/" element={
          authUser ? (<div className='flex h-screen'>
             <Logout></Logout>
            <Left></Left>
            <Right></Right>

            
          </div>
          ) : (
            <Navigate to={"/login"} />
          )
        } />
        <Route path='/Login' element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path='/Signup' element={authUser ? <Navigate to={"/"} /> : <Signup />} />
      </Routes>


    </>
  )
}

export default App
