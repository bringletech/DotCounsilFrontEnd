import React from "react";
import { FaBeer } from "react-icons/fa"; // Example icon

const DashCardSmall = ({ isLoading = false, ...obj }) => {
  const Icon = obj.icon;

  if (isLoading) {
    return (
      <div className="w-1/1 h-36 bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between animate-pulse">
        <div className="flex justify-between items-start">
          <div className="h-5 bg-gray-200 rounded w-24"></div>
          <div className="h-6 w-6 bg-gray-200 rounded"></div>
        </div>
        <div>
          <div className="h-8 bg-gray-200 rounded w-16"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-1/1 h-36 bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between">
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
