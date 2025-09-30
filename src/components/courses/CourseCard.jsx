// CourseCard.jsx
import React from "react";
import { FaBook, FaVideo, FaQuestion } from "react-icons/fa";

const CourseCard = (course) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-[32%] h-[500px] mt-5 ">
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-[95%] h-64 object-cover m-2 rounded-xl"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-lg font-semibold">{course.title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600">{course.description}</p>

        {/* Writer & Price */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-around  items-center text-md font-medium text-gray-700">
            <span>{course.writer}</span>
            <span>${course.price}</span>
          </div>
        
          <hr className="w-[90%] align-middle" />
        </div>

        {/* Modules / Videos / Quizzes */}
        <div className="flex justify-around mt-3 text-xs text-gray-700">
          <div className="flex items-center gap-1">
            <FaBook className="text-blue-500" />
            <span>{course.modules} Modules</span>
          </div>
          <div className="flex items-center gap-1">
            <FaVideo className="text-green-500" />
            <span>{course.videos} Videos</span>
          </div>
          <div className="flex items-center gap-1">
            <FaQuestion className="text-purple-500" />
            <span>{course.quizzes} Quizzes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
