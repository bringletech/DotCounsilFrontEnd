import React from "react";
// import "../../index.css" 
import {
  User,Settings,Mail,Ticket,ShoppingCart,Calendar,
} from "lucide-react";
import { AiFillDashboard} from "react-icons/ai";
import { FaList } from "react-icons/fa";


function SideBar() {
  // menu items array
  const menuItems = [
    { icon: AiFillDashboard, label: "Dashboard" },
    { icon: User, label: "Employees" },
    { icon: Settings, label: "My Dispositions" },
    { icon: Mail, label: "Email Campaign" },
    { icon: FaList, label: "Course List" },
    { icon: Ticket, label: "Coupon Code" },
    { icon: ShoppingCart, label: "Sales" },
    { icon: Calendar, label: "My Attendance" },
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
            <div
              key={index}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#1E40AF] hover:text-white cursor-pointer"
            >
              <item.icon size={20} />
              <span className="">
                <b>{item.label}</b>
              </span>
            </div>
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
