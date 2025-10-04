import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation
import useGetEmployees from "../hooks/api/useGetEmployees";

const Employee = () => {
  const { employees, loading, error } = useGetEmployees();
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const navigate = useNavigate(); // ✅ navigation hook

  if (loading)
    return <p className="text-center text-black">Loading employees...</p>;
  if (error)
    return <p className="text-center text-red-500">Error loading employees</p>;

  return (
    <div className="pl-4 pr-4 mt-7">
      {/* Header with Add Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Employee List</h2>
        <button
          onClick={() => navigate("/add-employee")} // ✅ navigate to Add_Emp_Form
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-green-600"
        >
          + Add Employee
        </button>
      </div>

      {/* Employee Table */}
      <table className="min-w-full border border-gray-300 bg-white rounded-lg shadow">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">Employee ID</th>
            <th className="p-3 border">Name</th>
            <th className="p-3 border">Department</th>
            <th className="p-3 border">Designation</th>
            <th className="p-3 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5" className="text-center p-5 text-blue-600">
                Loading employees...
              </td>
            </tr>
          ) : (
            employees.map((emp, index) => (
              <tr key={emp.id || index} className="text-center">
                <td className="p-3 border">{emp.employeeId}</td>
                <td className="p-3 border">{emp.name}</td>
                <td className="p-3 border">{emp.department}</td>
                <td className="p-3 border">{emp.designation}</td>
                <td className="p-3 border">
                  <button
                    onClick={() => setSelectedEmployee(emp)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Employee Details Modal */}
      {selectedEmployee && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-40 z-200">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h3 className="text-lg font-bold mb-4">Employee Details</h3>
            <p>
              <strong>ID:</strong> {selectedEmployee.employeeId}
            </p>
            <p>
              <strong>Name:</strong> {selectedEmployee.name}
            </p>
            <p>
              <strong>Department:</strong> {selectedEmployee.department}
            </p>
            <p>
              <strong>Designation:</strong> {selectedEmployee.designation}
            </p>
            <p>
              <strong>Joining Date:</strong> {selectedEmployee.joiningDate}
            </p>
            <p>
              <strong>Salary:</strong> ₹{selectedEmployee.salary}
            </p>
            <p>
              <strong>Gender:</strong> {selectedEmployee.gender ?? "N/A"}
            </p>
            <p>
              <strong>Phone:</strong> {selectedEmployee.phoneNo ?? "N/A"}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {selectedEmployee.permanentAddress ?? "N/A"}
            </p>

            <button
              onClick={() => setSelectedEmployee(null)}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Employee;
