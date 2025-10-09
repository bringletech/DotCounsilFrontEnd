import React from "react";

function Hero({ title, children, img, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="w-full h-auto py-10 px-5 bg-[#1E40AF] flex p-[10px] rounded-2xl capitalize">
        {/* Left Section - 70% */}
        <div className="w-[65%] flex flex-col justify-center">
          {/* Title skeleton */}
          <div className="h-9 bg-blue-200 bg-opacity-30 rounded w-1/2 mb-2 animate-pulse"></div>

          {/* Content skeleton - multiple lines */}
          <div className="mt-5 space-y-3">
            <div className="h-4 bg-blue-200 bg-opacity-30 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-blue-200 bg-opacity-30 rounded w-4/5 animate-pulse"></div>
            <div className="h-4 bg-blue-200 bg-opacity-30 rounded w-3/4 animate-pulse"></div>
          </div>
        </div>

        {/* Right Section - 35% */}
        <div className="w-[35%] flex items-center justify-center">
          <div className="img">
            {/* Image skeleton */}
            <div className="w-48 h-48 bg-blue-200 bg-opacity-30 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-auto py-10 px-5 bg-[#1E40AF] flex p-[10px] rounded-2xl capitalize">
      {/* Left Section - 70% */}
      <div className="w-[65%] flex flex-col justify-center">
        <h1 className="text-3xl font-bold text-[#F4CF4D]">Howdy {title}</h1>
        <p className="text-white mt-5">{children}</p>
      </div>

      {/* Right Section - 35% */}
      <div className="w-[35%] flex items-center justify-center">
        <div className="img">
          <img src={img ? img : null} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
