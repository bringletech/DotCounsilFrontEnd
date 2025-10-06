import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi"; // sales icon

const SalesContainer = ({ children }) => {
  const [filters, setFilters] = useState({
    search: "",
    course: "",
    dateRange: "",
  });

  const handleClear = () => {
    setFilters({
      search: "",
      course: "",
      dateRange: "",
    });
  };

  const handleFilter = () => {
    alert(`Filter applied:
      Search: ${filters.search}
      Course: ${filters.course}
      Date Range: ${filters.dateRange}`);
  };

  return (
    <div className="w-full bg-white p-4 rounded-xl border shadow">
      {/* Top Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <p className="text-xs text-gray-500">Sales</p>
          <p className="text-xs text-gray-500">Ticket</p>
        </div>

        {/* Filters */}
        <div className="flex gap-3">
          {/* Search */}
          <input
            type="text"
            placeholder="Search by dot/company name"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="border px-3 py-1 rounded-md text-sm"
          />

          {/* Course */}
          <select
            value={filters.course}
            onChange={(e) => setFilters({ ...filters, course: e.target.value })}
            className="border px-3 py-1 rounded-md text-sm"
          >
            <option value="">Select course</option>
            <option value="React">React</option>
            <option value="Node">Node.js</option>
            <option value="MERN">MERN</option>
          </select>

          {/* Date Range */}
          <input
            type="date"
            value={filters.dateRange}
            onChange={(e) =>
              setFilters({ ...filters, dateRange: e.target.value })
            }
            className="border px-3 py-1 rounded-md text-sm"
          />
        </div>
        {/* Buttons */}
      <div className="flex justify-end gap-2 mb-4">
        <button
          onClick={handleClear}
          className="px-4 py-1 border rounded-md bg-white text-black text-sm"
        >
          Clear
        </button>
        <button
          onClick={handleFilter}
          className="px-4 py-1 border rounded-md bg-red-600 text-white text-sm"
        >
          Filter
        </button>
      </div>
      </div>

      

      {/* Sales Info */}
      <div className="flex items-center gap-2 mb-4 text-gray-700">
        <FiShoppingCart className="text-xl text-red-500" />
        <span className="font-semibold">Total Sales: 4</span>
      </div>

      {/* Children (List Component) */}
      <div>{children}</div>
    </div>
  );
};

export default SalesContainer;
