import React from 'react'

function Hero() {
  return (
    <>
     <div className="w-full h-[300px] bg-[#1E40AF] flex p-[10px] rounded-2xl capitalize">
      {/* Left Section - 70% */}
      <div className="w-[65%] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[#F4CF4D]">howdy rick wood</h1>
        <p className="text-white mt-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis nulla hic illo laudantium dolorem eveniet facilis optio, mollitia perspiciatis ullam fuga laborum, assumenda molestiae sit dicta ad quaerat, pariatur ipsum quibusdam fugiat nemo officiis! Molestias autem ex, architecto necessitatibus tenetur ad aliquid ducimus adipisci at quia, doloremque itaque eum possimus!
        </p>
      </div>

      
      <div className="w-[35%] flex items-center justify-center">
       
        <div className="img ">
            <img src="./dash-hero-img.png" alt="" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero