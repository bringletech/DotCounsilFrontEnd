// CourseCard.jsx
import React from "react";
import { FaBook, FaVideo, FaQuestion, FaTrash } from "react-icons/fa";

const CourseCard = ({ course, onDelete }) => {
  return (
    <div className="relative bg-[#EFEFEF] rounded-xl shadow-md overflow-hidden w-[32%] h-full mt-5 p-8 group">
      {/* Image */}
      <button
        onClick={() => onDelete(course.id)}
        className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 z-20"
      >
        <FaTrash />
      </button>
      <img
        src="/HomeCourse2.png"
        className="w-[95%] h-64 object-cover m-2 rounded-xl"
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-lg font-semibold">{course.title}</h2>

        {/* Description */}
        <p className=" text-gray-600 line-clamp-3 mt-2 text-lg">
          {course.description}
        </p>

        {/* Writer & Price */}
        <div className="flex flex-col gap-1">
          <div className="flex justify-around  items-center text-md font-medium text-gray-700">
            <span>{course.author?.username || "Unknown"}</span>
            <span className="mt-2"> Price${course.price}</span>
          </div>

          <hr className="w-[90%] align-middle" />
        </div>

        {/* Modules / Videos / Quizzes */}
        {/* <div className="flex justify-around mt-3 text-xs text-gray-700">
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
        </div> */}
      </div>
    </div>
  );
};

export default CourseCard;
