import { useState } from 'react'
import Layout from './components/ui/Layout'
import Dashboard from './pages/Dashboard'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Employee from './pages/employee'
import CouponCode from './pages/CouponCode'
import CourseList from './pages/CourseList'
import EmailCampaign from './pages/EmailCampaign'
import Sales from './pages/Sales'
import Attendance from './pages/Attendance'
import CreateCourse from './pages/CreateCourse'
import Login from './components/Login'
import AdminLogin from './pages/AdminLogin'
import Analytics from './pages/Analytics'


function App() {
 
  return (
    <>
    <BrowserRouter>
    <Layout/>
      {/* bg-[#F6F6F6] */}
       <div className='absolute w-[79%] bg-[#F6F6F6] text-black top-[80px] left-[21%] pr-13 pl-5 pt-5 h-[calc(100vh-80px)] pb-10 overflow-y-auto  [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'>
      <Routes>
        <Route path='/login' element={<AdminLogin></AdminLogin>}></Route>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>

      <Route path='/employee' element={<Employee></Employee> }></Route>
      <Route path='/dashboard'element={<Dashboard></Dashboard> }></Route>
      <Route path='/analytics'element={<Analytics></Analytics>}></Route>
      <Route path='/couponcode'element={<CouponCode></CouponCode>}></Route>
      <Route path='/courselist'element={<CourseList></CourseList>}></Route>
      <Route path='/emailcampaign'element={<EmailCampaign></EmailCampaign>}></Route>
      <Route path='/sales'element={<Sales></Sales>}></Route>
      <Route path='attendance'element={<Attendance></Attendance>}></Route>
      <Route path='/createcourse'element={<CreateCourse></CreateCourse>}></Route>
  
      </Routes>
       </div>
    </BrowserRouter>
       
    </>
  )
}

export default App
