import React from "react";
import { FaBeer } from "react-icons/fa"; // Example icon

const DashCardSmall = (obj) => {
  const Icon=obj.icon;
  return (
    <div className="w-1/2 h-36 bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between">
     
      <div className="flex justify-between items-start">
        <h3 className="text-lg text-black font-bold">{obj.title}</h3>
        <Icon className={obj.iconClass}></Icon>
      </div>

    
      <div>
        <p className="text-2xl font-bold text-green-500">{obj.digits}</p>
      </div>
    </div>
  );
};

export default DashCardSmall;
