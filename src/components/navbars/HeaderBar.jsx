import React, { useContext } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

function HeaderBar({title,link}) {
  const {admin} = useContext(AuthContext)
 
  return (
    <>
    <div className="header  w-full flex justify-between items-center px-5 h-[80px] fixed bg-[#EFEFEF] z-[100] ">
        <div className="title font-bold text-2xl">
          <Link to={link?link:null}>{title}</Link>
            
        </div>
        <div className="flex gap-1 items-center fixed ml-[65%]">
            <div className="pic border-2 h-12 w-12 rounded-full relative bg-blue-500 flex items-center justify-center text-white">
              <span className='absolute left-4 top-2 text-xl '>{admin?.username?.charAt(0)}</span>
            </div>
            <div className="name text-lg font-bold">{admin?.username}</div>
        </div>
    </div>
    {/* <Outlet></Outlet> */}
    </>
  )
}

export default HeaderBar