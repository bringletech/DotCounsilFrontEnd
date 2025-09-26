import React, { useState } from 'react'

function Add_Emp_Form({onClose}) {
    const [formData,setFormData]=useState({
    fullName: "",
    email: "",
    address: "",
    role: "",
    status: "active",
    leadAssign: 0,
    })

    const handleChange=(e)=>{
        let name=e.target.name;
        let val=e.target.value;
        setFormData({...formData,[name]:val})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
    
  return (
    <>


        <form onSubmit={handleSubmit} className="space-y-4">

            <div className='space-y-1'>
                <label htmlFor="fullName" className="block font-medium text-gray-700">
               full name 
              </label>
               <input
        type="text"
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />

            </div>
     
      <div className="space-y-1">
        <label htmlFor="fullName" className="block font-medium text-gray-700">
               Email Address
              </label>
        
         <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      />
      </div>
     
      <div className="space-y-1">
        <label htmlFor="role" className="block font-medium text-gray-700">
               Role
              </label>

          <select
        name="role"
        value={formData.role}
        onChange={handleChange}
        className="w-full border p-2 rounded"
        required
      >
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="Employee">Employee</option>
      </select>     
     </div>
     
     <div className="space-y-1">
        <label htmlFor="status" className="block font-medium text-gray-700">
               Status
              </label>
         <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      >
        <option value="Active">Active</option>
        <option value="Inactive">Inactive</option>
      </select>     
              </div>
      
<div className="space-y-1">
        <label htmlFor="leadAssign" className="block font-medium text-gray-700">
               Lead Assigned
              </label>

         <input
        type="number"
        name="leadAssign"
        placeholder="Lead Assign"
        value={formData.leadAssign}
        onChange={handleChange}
        className="w-full border p-2 rounded"
      />      
     </div>         
     

      {/* Buttons */}
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
        >
          Add Employee
        </button>
      </div>
    </form>
    
    </>
  )
}

export default Add_Emp_Form
