import React from "react";
import SideBar from "../navbars/SideBar";
import HeaderBar from "../navbars/HeaderBar";
import { Outlet, useLocation } from "react-router-dom";
import CourseHeaderBar from "../courses/CourseHeaderBar";

function Layout({ link, title }) {
  const location = useLocation();
  const isCreateCourse = location.pathname === "/createcourse";

  return (
    <div className="mainContainer w-[98vw] min-h-screen bg-white flex ">
      <aside className="w-[20%] h-screen sticky top-0 overflow-y-auto">
        <SideBar />
      </aside>
      <section className="w-full min-h-screen flex flex-col">
        {isCreateCourse ? (
          <CourseHeaderBar title="<- Back" link="/courselist" />
        ) : (
          <HeaderBar title={title ?? "Dashboard"} link={link ?? null} />
        )}
        <div className="flex-1 overflow-y-auto bg-[#F3F4F6] p-6 mt-20">
          <Outlet />
        </div>
      </section>
    </div>
  );
}

export default Layout;
