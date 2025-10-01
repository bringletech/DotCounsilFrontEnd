import React from 'react'
import Login from "../components/Login";


function AdminLogin({setIsAuthenticated}) {
  return (
    <>
       <Login setIsAuthenticated={setIsAuthenticated}></Login>
    </>
  )
}

export default AdminLogin
