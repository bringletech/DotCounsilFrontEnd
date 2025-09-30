import React, { useState } from 'react'
import { cardDetail } from '../../constants/constants'
import DashCardSmall from './DashCardSmall'


function DashCardContainer() {

    const [stats,setStats]=useState({
         totalUsers: 2000,
         activeUsers: 1500,
         totalCourses: 25,
         revenue: 50000,
    })
    const [analysisStats,setAnalysisStats]=useState({
       
    })
    
  return (
    <>
    <div className="cards w-full  flex gap-2">
                       {
                        
                        cardDetail.map((card)=>{
                            let digits=0;
                            if(card.title==="Total Users") digits=stats.totalUsers;
                            if(card.title==="Active Users") digits=stats.activeUsers;
                            if(card.title==="Total Courses") digits=stats.totalCourses;
                            if(card.title==="Revenue") digits=stats.revenue;
                            
                            return <DashCardSmall {...card} digits={digits}></DashCardSmall>
                        })
                        }
     </div>
    </>
  )
}

export default DashCardContainer