import React from "react";
import { FaBeer } from "react-icons/fa"; // Example icon

const DashCardSmall = (obj) => {
  return (
    <div className="w-[250px] h-[130px] bg-white shadow-lg rounded-xl p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div className="flex justify-between items-start">
        <h3 className="text-lg text-black font-bold">{obj.title}</h3>
        <FaBeer className="w-6 h-6 text-blue-500" />
      </div>

      {/* Bottom Section */}
      <div>
        <p className="text-2xl font-bold text-green-500">{obj.digits}</p>
      </div>
    </div>
  );
};

export default DashCardSmall;
