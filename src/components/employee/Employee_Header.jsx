import React from 'react'

function Employee_Header({openModal}) {
  return (
    <>
    <div className="header flex justify-between  ">
        <div className="left">
            <div className="heading text-black font-bold text-3xl">manage employees</div>
            <div className="subHeading text-[#999999]">manage your sales list </div>
        </div>
        <div className="right">
            <button onClick={openModal} className='w-[150px] h-[40px] text-white capitalize bg-blue-800 rounded-lg'>+ add employee</button>
        </div>
    </div>
    </>
  )
}

export default Employee_Header
