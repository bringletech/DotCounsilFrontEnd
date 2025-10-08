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
              className="mt-4 px-4 py-2 bg-red-500 cursor-pointer text-white rounded hover:bg-red-600"
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
