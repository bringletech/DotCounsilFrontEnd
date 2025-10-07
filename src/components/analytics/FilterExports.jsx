import React from "react";
import { FiFilter } from "react-icons/fi"; 
import { MdOutlineFileDownload } from "react-icons/md";

const FilterExportCard = () => {
  return (
    <div className="w-full h-[200px] border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      {/* Title */}
      <div className="flex items-center gap-2 mb-4">
        <FiFilter className="text-gray-700 text-lg" />
        <h2 className="font-semibold text-gray-800">Filter & Exports</h2>
      </div>

      {/* Filter Options */}
      <div className="flex gap-4 w-full">
        {/* Total Users */}
        <div className="flex-1  rounded p-2">
          <p className="text-sm font-medium text-gray-600">Total Users</p>
          <input
            type="text"
            placeholder="Pick a date range"
            className="w-full text-sm border border-gray-300 rounded px-2 py-1 mt-2 focus:outline-none"
          />
        </div>

        {/* Course */}
        <div className="flex-1  rounded p-2">
          <p className="text-sm font-medium text-gray-600">Course</p>
          <select className="w-full border border-gray-300 rounded px-2 py-1 mt-2 text-sm focus:outline-none">
            <option>All Courses</option>
            <option>React Basics</option>
            <option>Node.js Mastery</option>
            <option>DSA Bootcamp</option>
          </select>
        </div>

        {/* Company */}
        <div className="flex-1  rounded p-2">
          <p className="text-sm font-medium text-gray-600">Company</p>
          <select className="w-full border border-gray-300 rounded px-2 py-1 mt-2 text-sm focus:outline-none">
            <option>All Companies</option>
            <option>Google</option>
            <option>Amazon</option>
            <option>Microsoft</option>
          </select>
        </div>

        {/* Employee Status */}
        <div className="flex-1  rounded p-2">
          <p className="text-sm font-medium ">Employee Status</p>
          <select className="w-full border border-gray-300 rounded px-2 py-1 mt-2 text-sm focus:outline-none">
            <option>All Employees</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Intern</option>
          </select>
        </div>

        {/* Export Data */}
        <div className="flex-1  rounded p-2 flex flex-col justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Export Data</p>
            <input
              type="text"
              placeholder="CSV"
              className="w-full border border-gray-300 rounded px-2 py-1 mt-2 text-sm focus:outline-none"
            />
          </div>
          <div className="flex justify-between mt-2">
            <button className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded text-sm">
              <MdOutlineFileDownload /> Export
            </button>
            <button className="px-3 py-1 bg-gray-400 text-white rounded text-sm">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterExportCard;
