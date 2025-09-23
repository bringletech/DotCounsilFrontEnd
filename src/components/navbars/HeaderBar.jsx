import React from 'react'

function HeaderBar() {
  return (
    <>
    <div className="header  w-full flex justify-between items-center px-5 h-[80px] fixed bg-[#EFEFEF] z-[100] ">
        <div className="title font-bold text-2xl">
            Dashboard
        </div>
        <div className="flex gap-1 items-center ml-[850px] fixed">
            <div className="pic border-2 h-12 w-12 rounded-full ">
                <img src="" alt="" />
            </div>
            <div className="name text-lg font-bold  ">Rick Wood</div>
        </div>
    </div>
    </>
  )
}

export default HeaderBar