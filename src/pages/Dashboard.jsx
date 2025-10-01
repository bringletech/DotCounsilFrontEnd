import React from 'react'
import Hero from '../components/dashboard/Hero';
import ChartCard from '../utils/chart-config';
import QuickActionsCard from '../components/dashboard/QuickActionsCard';
// import DashCardContainer from '../components/dashboard/DashCardContainer';
import { lineData,barData,doughnutData,progressBarData,options,progressBarOptions } from '../constants/constants';

function Dashboard() {
  return (
    <>
    <Hero title={"Howdy Ricky Wood"} img={"./dash-hero-img.png"} >
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam explicabo voluptatibus eaque et deleniti? Asperiores, repellendus, ea autem voluptas veritatis sapiente corporis sed iure a vel accusantium ut possimus quidem Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam repudiandae quibusdam eos at deleniti facere, et qui voluptates exercitationem veritatis architecto earum. Repudiandae recusandae iste consequatur doloribus tempore sint illo!
    </Hero>

          <div className="overveiw mt-10">
            <h1 className='my-10 font-bold text-2xl '>over view</h1>
            
            {/* <DashCardContainer
  type="dash"
  stats={{
    totalUsers: 2000,
    activeUsers: 1500,
    totalCourses: 25,
    revenue: 50000,
  }}
/> */}

            <div className='ml-5 mt-5'>
    

    <div className="flex w-full gap-4  mt-5 pb-5">
      <div className='w-1/2'>
       <ChartCard type="line" title="revenue trends" data={lineData} options={options} />
      </div>
      <div className="w-1/2">
       <ChartCard type="bar" title="Course enrollments" data={barData} options={options} />
      </div>

   
     </div>
     <div className="flex gap-4 w-full mt-5 pb-5">
      <div className="w-1/2">
          <ChartCard type="doughnut" title="recent activities " data={doughnutData} options={options} />
      </div>
      <div className="w-1/2">
        <ChartCard type="bar" title="top performing courses" data={progressBarData} options={progressBarOptions}/>
      
      </div>


     </div>
    
    <QuickActionsCard title={"quick links"}/>
 </div>
         
        </div>
    </>
  )
}

export default Dashboard