import React, { useState } from "react";
import useSendEmployee from "../../hooks/api/useSendEmployee";

function Add_Emp_Form({ onClose }) {
  const [formData, setFormData] = useState({
    employeeId: "",
    name: "",
    email: "",
    password: "",
    department: "",
    designation: "",
    joiningDate: "",
    salary: "",
  });

  const { sendEmployee, loading, error } = useSendEmployee();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await sendEmployee(formData);
    if (res) {
      alert("Employee added successfully!");
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Employee ID</label>
        <input
          type="text"
          name="employeeId"
          placeholder="Employee ID"
          value={formData.employeeId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Full Name</label>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Department</label>
        <input
          type="text"
          name="department"
          placeholder="Department"
          value={formData.department}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Designation</label>
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={formData.designation}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Joining Date</label>
        <input
          type="date"
          name="joiningDate"
          value={formData.joiningDate}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="space-y-1">
        <label className="block font-medium text-gray-700">Salary</label>
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 bg-gray-300 rounded"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Employee"}
        </button>
      </div>

      {error && <p className="text-red-500">{error.message}</p>}
    </form>
  );
}

export default Add_Emp_Form;
