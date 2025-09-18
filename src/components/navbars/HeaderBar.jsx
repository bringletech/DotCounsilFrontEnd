import React from 'react'

function HeaderBar() {
  return (
    <>
    <div className="header flex justify-between items-center px-5 h-[80px] bg-[#EFEFEF] ">
        <div className="title font-bold text-2xl">
            Dashboard
        </div>
        <div className="flex gap-1 items-center">
            <div className="pic border-2 h-12 w-12 rounded-full ">
                <img src="" alt="" />
            </div>
            <div className="name text-lg font-bold ">Rick Wood</div>
        </div>
    </div>
    </>
  )
}

export default HeaderBar