import React, { useContext, useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const TIMEZONES = [
  { label: "PST", offset: -8 },
  { label: "MST", offset: -7 },
  { label: "CST", offset: -6 },
  { label: "EST", offset: -5 },
];

const getTimeInZone = (offset) => {
  const utc = new Date();
  const local = new Date(
    utc.getTime() + (offset * 60 + utc.getTimezoneOffset()) * 60000
  );
  return local.toLocaleString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
};

function HeaderBar({ title, link }) {
  const { admin } = useContext(AuthContext);
  const [times, setTimes] = useState({});

  useEffect(() => {
    const updateTimes = () => {
      const t = {};
      TIMEZONES.forEach(({ label, offset }) => {
        t[label] = getTimeInZone(offset);
      });
      setTimes(t);
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="header  w-full flex justify-between items-center px-5 h-[80px] fixed bg-[#EFEFEF] z-20 ">
        <div className="flex items-center h-[63px]">
          {TIMEZONES.map((tz) => (
            <span key={tz.label}>
              <span className="font-bold ml-4">{tz.label}:</span>{" "}
              {times[tz.label]}
            </span>
          ))}
        </div>
        <div className="title font-bold text-2xl">
          <Link to={link ? link : null}>{title}</Link>
        </div>
        <div className="flex gap-1 items-center fixed ml-[65%]">
          <div className="pic border-2 h-12 w-12 rounded-full relative bg-blue-500 flex items-center justify-center text-white">
            <span className="absolute left-4 top-2 text-xl ">
              {admin?.username?.charAt(0)}
            </span>
          </div>
          <div className="name text-lg font-bold">{admin?.username}</div>
        </div>
      </div>
      {/* <Outlet></Outlet> */}
    </>
  );
}

export default HeaderBar;
