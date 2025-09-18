import { useState } from 'react'
import SideBar from './components/navbars/SideBar'
import HeaderBar from './components/navbars/HeaderBar'
import Index from './components/ui/Layout'

import Hero from './components/dashboard/Hero'
import DashCardSmall from './components/dashboard/DashCardSmall'



function App() {
 
   let cardDetail=[{
    digits:2000,
    title:"total user"
   },
  {
    digits:2000,
    title:"Active user"
   },
  {
    digits:2000,
    title:"total courses"
   },
  {
    digits:2000,
    title:"revenue"
   }]

  return (
    <>
       <Index />
       <div className='absolute top-[15%] left-[23%] pr-7 bg-[#F6F6F6] '>
          <Hero></Hero>

          <div className="overveiw mt-10">
            <h1 className='my-10 font-bold text-2xl '>over view</h1>
            <div className="cards flex gap-2">
                       {
                        cardDetail.map((obj)=><DashCardSmall {...obj}></DashCardSmall>)
                        }
            </div>
         
          </div>
        
       </div>

    </>
  )
}

export default App
