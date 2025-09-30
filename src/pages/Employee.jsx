import React, { useState } from 'react'
import SubHeader from '../components/shared/SubHeader'
import Table from '../components/employee/Table';
import Modal from '../components/shared/Modal';
import Add_Emp_Form from '../components/employee/Add_Emp_Form';

const employees = [
    { id: 1, name: "Tushar Garg", role: "Frontend Developer", email: "tushar@example.com",status:"active",sales:"150"},
    { id: 2, name: "rishabh mangla", role: "UI/UX Designer", email: "rishabh@example.com",status:"suspended",sales:"150"},
    { id: 3, name: "Munish Kumar", role: "Backend Developer", email: "munish@example.com", status:"active",sales:"150"},
  ];

  // ✅ Define columns
  const columns = [
    
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "email", label: "Email" },
    { key: "status", label: "Status" },
    { key: "sales", label: "Total Sales" },

  ];
  
  
  
  function Employee() {
    const onClose=()=>{
    setIsOpen(false);
  }
  const openModal=()=>{
    setIsOpen(true);
  }
  const [isOpen,setIsOpen]=useState(false);
  return (
   <>
  <div>
     <SubHeader openModal={openModal} heading={"Manage Employees"} subHeading={"Manage Your Sales Team And Track Their Performance"} btnTxt={"+Add Employee"} ></SubHeader>
<div className='mt-10'>

     <Table columns={columns} data={employees} />
</div>
<Modal isOpen={isOpen} title={"add employee"} onClose={onClose} subtitle={"please add employee"} >
  <Add_Emp_Form onClose={onClose}></Add_Emp_Form>
</Modal>
  </div>
   
   </>
  )
}

export default Employee