import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useGetEmployees from "../hooks/api/useGetEmployees";
import Table from "../components/employee/Table";

const Employee = () => {
  const { employees, loading, error } = useGetEmployees();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const navigate = useNavigate();

  // Define table columns
  const columns = [
    { key: "employeeId", label: "Employee ID" },
    { key: "name", label: "Name" },
    { key: "department", label: "Department" },
    { key: "designation", label: "Designation" },
    { key: "actions", label: "Actions" },
  ];

  // Transform employee data to include actions
  const tableData = employees.map((emp, index) => ({
    ...emp,
    actions: (
      <button
        onClick={() => setSelectedEmployee(emp)}
        className="px-3 py-1 bg-blue-500 cursor-pointer text-white rounded hover:bg-blue-600"
      >
        View Details
      </button>
    ),
  }));

  if (error)
    return <p className="text-center text-red-500">Error loading employees</p>;

  return (
    <div className="pl-4 pr-4 mt-7">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Employee List</h2>
        <button
          onClick={() => navigate("/add-employee")}
          className="px-4 py-2 cursor-pointer bg-blue-500 text-white rounded hover:bg-green-600"
        >
          + Add Employee
        </button>
      </div>

      {/* Employee Table with Skeleton Loading */}
      <Table columns={columns} data={tableData} isLoading={loading} />

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden animate-fade-in">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 relative">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Employee Details
                  </h3>
                  <p className="text-blue-100 text-sm">
                    ID: {selectedEmployee.employeeId}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedEmployee(null)}
                  className="text-white hover:bg-white hover:text-black cursor-pointer hover:bg-opacity-20 rounded-full p-2 transition-all duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-8rem)]">
              {/* Profile Section */}
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  {selectedEmployee.name?.charAt(0)?.toUpperCase() || "E"}
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-800">
                    {selectedEmployee.name}
                  </h4>
                  <p className="text-gray-600">
                    {selectedEmployee.designation}
                  </p>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-1">
                    {selectedEmployee.department}
                  </span>
                </div>
              </div>

              {/* Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                {/* Personal Information */}
                {/* <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Personal Information
                  </h5>

                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="font-medium text-gray-800">
                          {selectedEmployee.email || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="font-medium text-gray-800">
                          {selectedEmployee.phoneNo || "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Address</p>
                        <p className="font-medium text-gray-800">
                          {selectedEmployee.permanentAddress || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Work Information */}
                <div className="space-y-4">
                  <h5 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                    Work Information
                  </h5>

                  <div className="space-y-3">
                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-yellow-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a4 4 0 118 0v4m-4 0v-4m0 4L8 9l4 2 4-2-4-2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Department</p>
                        <p className="font-medium text-gray-800">
                          {selectedEmployee.department}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-indigo-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Designation</p>
                        <p className="font-medium text-gray-800">
                          {selectedEmployee.designation}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3a4 4 0 118 0v4m-4 0v-4m0 4L8 9l4 2 4-2-4-2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Joining Date</p>
                        <p className="font-medium text-gray-800">
                          {selectedEmployee.joiningDate
                            ? new Date(
                                selectedEmployee.joiningDate
                              ).toLocaleDateString()
                            : "N/A"}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-green-600 font-medium">
                          Salary
                        </p>
                        <p className="font-bold text-green-700 text-lg">
                          ₹{selectedEmployee.salary?.toLocaleString() || "N/A"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-6 py-4 flex justify-end space-x-3">
              <button
                onClick={() => setSelectedEmployee(null)}
                className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
              >
                Close
              </button>
              {/* <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium">
                Edit Employee
              </button> */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
