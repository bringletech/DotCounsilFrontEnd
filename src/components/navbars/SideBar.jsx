import React from "react";
import {NavLink,Link} from 'react-router-dom';
// import "../../index.css" 
import {
  User,Settings,Mail,Ticket,ShoppingCart,Calendar,
} from "lucide-react";
import { AiFillDashboard} from "react-icons/ai";
import { FaList } from "react-icons/fa";


function SideBar() {
  // menu items array
  const menuItems = [
    { icon: AiFillDashboard, label: "Dashboard" ,link:"/dashboard"},
    { icon: User, label: "Employees",link:"/employee" },
    { icon: Settings, label: "My Dispositions",link:"/dispositions" },
    { icon: Mail, label: "Email Campaign",link:"/emailcampaign" },
    { icon: FaList, label: "Course List",link:"/courselist" },
    { icon: Ticket, label: "Coupon Code",link:"/couponcode"},
    { icon: ShoppingCart, label: "Sales",link:"/sales" },
    { icon: Calendar, label: "My Attendance",link:"/attendance" },
  ];

  return (
    <>
      <div className="container h-[100vh] w-[100%] bg-[#F0F7FF] flex flex-col p-5">
        {/* Logo */}
        <div className="logo pb-2 border-b border-blue-500">
          <img src="/logo.png" className="m-auto" alt="Logo" />
        </div>

        {/* Links */}
        <div className="links mb-5 flex flex-col gap-3 mt-4 overflow-y-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menuItems.map((item, index) => (
            <NavLink to={item.link} className={({isActive})=>isActive?"bg-[#1E40AF] text-white": "bg-[#F0F7FF] text-black" }>
                   <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#637fdb] hover:text-white cursor-pointer"
            >
              <item.icon size={20} />
              <span className="">
                <b>{item.label}</b>
              </span>
            </div>
            </NavLink>
           
          ))}

        </div>
        <div className="logout-btn flex justify-center ">
            <button className="bg-[#1E40AF] w-[150px] h-[40px] text-white rounded-sm m-auto">
                logout
            </button>
          </div>
      </div>
    </>
  );
}

export default SideBar;
