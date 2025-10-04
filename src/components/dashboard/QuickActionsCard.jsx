import React from "react";
import { useNavigate } from "react-router-dom";

function QuickActionsCard({ title }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-1/2 h-50 flex gap-2 capitalize">
        <div className="text-lg font-bold mb-4 ">{title}</div>
        <div className="btns flex  gap-4 capitalize">
          <button
            className=" w-60  h-10 text-black font-semibold  bg-[#F0F0F0] py-2 rounded-full"
            onClick={() => navigate("/add-employee")}
          >
            Add Employee{" "}
          </button>
          <button
            className=" w-60 h-10 text-black font-semibold bg-[#F0F0F0] py-2 rounded-full"
            onClick={() => navigate("/createcourse")}
          >
            Create Courses
          </button>
        </div>
      </div>
    </>
  );
}

export default QuickActionsCard;
