import React from 'react'
import SideBar from '../navbars/SideBar'
import HeaderBar from '../navbars/HeaderBar'


function Layout() {
  return (
    <>
    <div className="mainContainer w-screen max-h-screen bg-white flex ">
        <div className="w-[27%] h-full">
             <SideBar></SideBar>
        </div>
        <div className="w-full">
              <HeaderBar></HeaderBar>
        </div>

    </div>
    </>
  )
}

export default Layout