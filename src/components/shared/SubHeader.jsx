import React from "react";
import { Link } from "react-router-dom";

function SubHeader({ openModal, heading, subHeading, btnTxt, link }) {
  return (
    <>
      <div className="header flex justify-between  ">
        <div className="left">
          <div className="heading text-black font-bold text-3xl">{heading}</div>
          <div className="subHeading text-[#999999]">{subHeading} </div>
        </div>
        <div className="right">
          <Link to={link ? link : null}>
            <button
              onClick={openModal}
              className="w-[150px] h-[40px] cursor-pointer text-white capitalize bg-blue-800 rounded-lg"
            >
              {btnTxt}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default SubHeader;
