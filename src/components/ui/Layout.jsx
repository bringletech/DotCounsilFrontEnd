import React from 'react'
import SideBar from '../navbars/SideBar'
import HeaderBar from '../navbars/HeaderBar'
import { useLocation } from 'react-router-dom';
import CourseHeaderBar from '../courses/CourseHeaderBar';


function Layout({link,title}) {
   var location=useLocation();
  console.log("hello:",location.pathname);
  var isCreateCourse=location.pathname==='/createcourse'
  return (
    <>
    <div className="mainContainer w-screen max-h-screen bg-white flex fixed ">
        <div className="w-[27%] h-full">
             <SideBar></SideBar>
        </div>
        <div className="w-full">
             {isCreateCourse?<CourseHeaderBar title={'<- Back'} link={"/courselist"}></CourseHeaderBar>:<HeaderBar title={'Dashboard'} link={link?link:null}></HeaderBar>} 
        </div>
      
    </div>
    </>
  )
}

export default Layout