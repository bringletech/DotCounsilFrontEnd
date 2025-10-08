import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import useGetCourses from "../../hooks/api/useGetCourses";

const SalesContainer = ({ children, onFilter }) => {
  const [filters, setFilters] = useState({
    search: "",
    course: "",
    startDate: "",
    endDate: "",
  });

  const { courses } = useGetCourses();

  const handleClear = () => {
    setFilters({
      search: "",
      course: "",
      startDate: "",
      endDate: "",
    });
    if (onFilter) onFilter(null); // reset filters in parent
  };

  const handleFilter = () => {
    if (onFilter) onFilter(filters); // send filters to parent
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
          <input
            type="text"
            placeholder="Search by dot/company name"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="border px-3 py-1 rounded-md text-sm"
          />

          <select
            value={filters.course}
            onChange={(e) => setFilters({ ...filters, course: e.target.value })}
            className="border px-3 py-1 rounded-md text-sm"
          >
            <option value="">Select course</option>
            {courses.map((course) => (
              <option key={course.id} value={course.id}>
                {course.title}
              </option>
            ))}
          </select>

          <input
            type="date"
            value={filters.startDate}
            onChange={(e) =>
              setFilters({ ...filters, startDate: e.target.value })
            }
            className="border px-3 py-1 rounded-md text-sm"
          />

          <input
            type="date"
            value={filters.endDate}
            onChange={(e) =>
              setFilters({ ...filters, endDate: e.target.value })
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

      {/* Children remain untouched */}
      <div>{children}</div>
    </div>
  );
};

export default SalesContainer;
