import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

function CourseHeaderBar({title,link}) {
 
  return (
    <>
    <div className="header  w-full flex justify-between items-center px-5 h-[80px] fixed bg-[#EFEFEF] z-[100] ">
        <div className="title font-semibold text-xl">
          <Link to={link?link:null}>{title}</Link>
            
        </div>
    </div>
    {/* <Outlet></Outlet> */}
    </>
  )
}

export default CourseHeaderBar;