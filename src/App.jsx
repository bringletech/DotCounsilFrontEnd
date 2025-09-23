import { useState } from 'react'
import Layout from './components/ui/Layout'
import Dashboard from './pages/Dashboard'
import SideBar from './components/navbars/SideBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Employee from './pages/employee'
import Dispositions from './pages/Dispositions'
import CouponCode from './pages/CouponCode'
import CourseList from './pages/CourseList'
import EmailCampaign from './pages/EmailCampaign'
import Sales from './pages/Sales'
import Attendance from './pages/Attendance'


function App() {
 
   

  return (
    <>
    <BrowserRouter>
    <Layout/>
      
       <div className='absolute top-[80px] left-[21%] pr-7 pl-5 pt-5 h-[calc(100vh-80px)] pb-10 overflow-y-auto bg-[#F6F6F6] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>

      <Route path='/employee' element={<Employee></Employee> }></Route>
      <Route path='/dashboard'element={<Dashboard></Dashboard> }></Route>
      <Route path='/dispositions'element={<Dispositions></Dispositions>}></Route>
      <Route path='/couponcode'element={<CouponCode></CouponCode>}></Route>
      <Route path='/courselist'element={<CourseList></CourseList>}></Route>
      <Route path='/emailcampaign'element={<EmailCampaign></EmailCampaign>}></Route>
      <Route path='/sales'element={<Sales></Sales>}></Route>
      <Route path='attendance'element={<Attendance></Attendance>}></Route>
  
      </Routes>
       </div>
    </BrowserRouter>
       
    </>
  )
}

export default App
