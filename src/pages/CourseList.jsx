import React from "react";
import Stepper from "../components/courses/Stepper";
import SubHeader from "../components/shared/SubHeader";
import CourseCardContainer from "../components/courses/CourseCardContainer";

function CourseList() {
  return (
    <>
      <SubHeader
        heading={"course management"}
        subHeading={"create,manage and publish your online courses"}
        btnTxt={"+ Create Course"}
        link={"/createcourse"}
        className={"mt-20"}
      ></SubHeader>

      <CourseCardContainer></CourseCardContainer>
    </>
  );
}

export default CourseList;
