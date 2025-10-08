import React, { useState } from "react";
import useCreateAdmin from "../../hooks/api/useCreateAdmin";
const Add_Emp_Form = () => {
  const { createAdmin, loading, error, success } = useCreateAdmin();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    adminType: "ADMIN",
    hasEmployeeRole: true,
    employeeDetails: {
      employeeId: "",
      name: "",
      department: "",
      designation: "",
      joiningDate: "",
      salary: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Check if field is inside employeeDetails
    if (name in formData.employeeDetails) {
      setFormData({
        ...formData,
        employeeDetails: {
          ...formData.employeeDetails,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert salary to string
    const payload = {
      ...formData,
      employeeDetails: {
        ...formData.employeeDetails,
        salary: String(formData.employeeDetails.salary),
      },
    };

    try {
      const res = await createAdmin(payload);
      console.log("Admin created:", res);
    } catch (err) {
      console.error("Create admin error:", err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto bg-white p-8 rounded shadow space-y-4 "
    >
      <h2 className="text-xl font-bold mb-4">Create Admin</h2>

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <input
        type="text"
        name="adminType"
        placeholder="Admin Type"
        value={formData.adminType}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        required
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="hasEmployeeRole"
          checked={formData.hasEmployeeRole}
          onChange={(e) =>
            setFormData({ ...formData, hasEmployeeRole: e.target.checked })
          }
        />
        Has Employee Role
      </label>

      <h3 className="font-semibold mt-4">Employee Details</h3>
      <input
        type="text"
        name="employeeId"
        placeholder="Employee ID"
        value={formData.employeeDetails.employeeId}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.employeeDetails.name}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.employeeDetails.department}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="designation"
        placeholder="Designation"
        value={formData.employeeDetails.designation}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="date"
        name="joiningDate"
        placeholder="Joining Date"
        value={formData.employeeDetails.joiningDate}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="number"
        name="salary"
        placeholder="Salary"
        value={formData.employeeDetails.salary}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded mt-4"
      >
        {loading ? "Creating..." : "Create Admin"}
      </button>

      {error && <p className="text-red-500 mt-2">{error.message}</p>}
      {success && (
        <p className="text-green-500 mt-2">Admin created successfully!</p>
      )}
    </form>
  );
};

export default Add_Emp_Form;
