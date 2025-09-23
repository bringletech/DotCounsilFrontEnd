import React from 'react'
import Hero from '../components/dashboard/Hero';
import DashCardSmall from '../components/dashboard/DashCardSmall';
import ChartCard from '../util/chart-config';
import { CategoryScale } from 'chart.js';
import QuickActionsCard from '../components/dashboard/QuickActionsCard';
import { FaUser } from "react-icons/fa";
import { VscVmActive } from "react-icons/vsc";
import { GiGraduateCap } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
const lineData = {
  labels: ["day 5", "day 10", "day 15", "day 20", "day 25"],
  datasets: [
    {
      label: "Sales",
        data: [10, 20, 15, 30, 25],
        borderColor: "rgb(59,130,246)", // Tailwind blue-500
        backgroundColor: "rgba(59,130,246,0.4)",
        fill: true,
        borderWidth: 1.5, // 👈 sleek line
        pointRadius: 2,   // 👈 small points
        tension: 0.4,
      },
    ],
  };
  const coursesData = [
  {
    name: "React Fundamental",
    
    data: [1200, 1500, 1700, 2000, 1800, 2200, 2500],
  },
  {
    name: "Adv. Java",
    
    data: [800, 1200, 1400, 1600, 1800, 2000, 2300],
  },
  {
    name: "UI/UX Design",
    
    data: [500, 900, 1300, 1500, 1700, 1900, 2100],
  },
];
const colors=["#1E40AF","#30C93B","#E2C044"];

const barData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
  datasets: coursesData.map((c, idx) => ({
    label: c.name,
    data: c.data,
    backgroundColor: colors[idx],
    barThickness: 8,
    barPercentage: 1,
    categoryPercentage: 0.1,
    borderRadius: [6, 6, 6, 6],
    maxBarThickness: 21,
  })),
};
  
  const doughnutData = {
    labels: ["enrollment", "new users", "new employees"],
    datasets: [
      {
        data: [55, 25, 20],
        backgroundColor: ["#1E40AF", "#30C93B", "#E2C044"], // blue, green,yellow
      },
    ],
  };
  
const ProgColors = ["#1E40AF", "#30C93B", "#E2C044"];
const courses = ["React Fundamental", "Advanced Java", "UI/UX Design"];
const values = [2500, 2000, 1800];

const progressBarData = {
  labels: ["React Fundamental", "Advanced Java", "UI/UX Design"], // y-axis pe ye dikhega
  datasets: courses.map((c,idx)=>({
    label: c,
      data: [values[idx]], // har ek course ki value
      backgroundColor: ProgColors[idx], // alag-alag color
      borderRadius: 6,
      maxBarThickness: 12, // mota bar
      categoryPercentage:1.4,
      barPercentage: 0.8,
    }))
    
    
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false, 
    cutout: "70%", 
    layout: {
      padding:{
        top: 20,    // upar gap
        bottom: 10
      }             
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
        boxWidth: 12,   // 👈 color box width
        boxHeight: 12,  // 👈 color box height
        
        padding: 8,     // 👈 text aur box ke beech space
        font: {
          size: 12,     // 👈 text 
        },
      },
    }
  }
};

const progressBarOptions={...options,
  indexAxis:'y',
  scales: {
    x: {
      min: 0,
      max: 3000,   // max value set karni hai
      display: false, // x-axis ke numbers hide
    },
    y: {
      ticks: { font: { size: 14 } ,padding:50}, // course names dikhe y-axis pe
      display:false,
      offset: true, 
    },
  },}
  
  
  let cardDetail=[{
    digits:2000,
    title:"total user",
    icon:<FaUser className="w-6 h-6 text-blue-500"/>,
  },
  {
    digits:2000,
    title:"Active user",
    icon:<VscVmActive className="w-6 h-6 text-blue-500" />
  },
  {
    digits:2000,
    title:"total courses",
    icon:<GiGraduateCap className="w-6 h-6 text-blue-500" />

  },
  {
    digits:2000,
    title:"revenue",
    icon:<FaUserCircle className="w-6 h-6 text-blue-500" />
  }]
  // <FaBeer className="w-6 h-6 text-blue-500" />

function Dashboard() {
  return (
    <>
    <Hero></Hero>

          <div className="overveiw mt-10">
            <h1 className='my-10 font-bold text-2xl '>over view</h1>
            <div className="cards flex gap-2">
                       {
                        cardDetail.map((obj)=><DashCardSmall {...obj}></DashCardSmall>)
                        }
            </div>

            <div className='ml-5 mt-5'>
    

    
    <div className="flex gap-10 ">
       <ChartCard type="line" title="revenue trends" data={lineData} options={options} />
   
       <ChartCard type="bar" title="Course enrollments" data={barData} options={options} />
     </div>
     <div className="flex gap-10 mt-5 pb-5">
          <ChartCard type="doughnut" title="recent activities " data={doughnutData} options={options} />
        <ChartCard type="bar" title="top performing courses" data={progressBarData} options={progressBarOptions}/>
     </div>
    
    <QuickActionsCard title={"quick links"}/>
 </div>
         
          </div>
    </>
  )
}

export default Dashboard