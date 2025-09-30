import React from 'react'

function QuickActionsCard({title}) {
  return (
    <>
 

 <div className="bg-white shadow-lg rounded-2xl p-6 w-1/2 h-50 flex flex-wrap gap-2 capitalize">
    <div className='text-lg font-bold mb-4 '>{title}</div>
    <div className="btns flex flex-wrap gap-4 capitalize">
  <button className=" w-1/3 h-10 text-black font-semibold  bg-[#F0F0F0] py-2 rounded-full">add courses </button>
  <button className=" w-1/3 h-10 text-black font-semibold bg-[#F0F0F0] py-2 rounded-full">add employees</button>
  <button className=" w-1/3 h-10 text-black font-semibold bg-[#F0F0F0] py-2 rounded-full">gen. report</button>
  <button className=" w-1/3 h-10 text-black font-semibold bg-[#F0F0F0] py-2 rounded-full">manage users</button>
    </div>
 

    </div>
    </>
  )
}

export default QuickActionsCard