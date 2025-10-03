import React from 'react'

function Hero({title,children,img}) {
  return (
    <>
     <div className='w-full h-auto py-10 mt-15 px-5 bg-[#1E40AF] flex p-[10px] rounded-2xl capitalize'>
      {/* Left Section - 70% */}
      <div className="w-[65%] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[#F4CF4D]">Howdy {title}</h1>
        <p className="text-white mt-5">
           {children}
        </p>
      </div>

      
      <div className="w-[35%] flex items-center justify-center">
       
        <div className="img">
            <img src={img?img:null} alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero