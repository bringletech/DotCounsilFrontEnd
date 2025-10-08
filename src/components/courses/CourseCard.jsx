// CourseCard.jsx
import React from "react";
import { FaBook, FaVideo, FaQuestion, FaTrash } from "react-icons/fa";

const CourseCard = ({ course, onDelete, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="relative bg-[#EFEFEF] rounded-xl shadow-md overflow-hidden w-[32%] h-full mt-5 py-5">
        {/* Image Skeleton */}
        <div className="w-[95%] h-64 m-2 rounded-xl animate-pulse bg-gray-200"></div>

        {/* Content Skeleton */}
        <div className="p-4 flex flex-col gap-2">
          {/* Title Skeleton */}
          <div className="h-6 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>

          {/* Description Skeleton - 3 lines */}
          <div className="space-y-2 mt-2">
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
          </div>

          {/* Writer & Price Skeleton */}
          <div className="flex flex-col gap-1 pt-5">
            <div className="flex justify-around items-center">
              <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
            </div>
            <hr className="w-[100%] align-middle" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-[#EFEFEF] rounded-xl shadow-md overflow-hidden w-[32%] h-full mt-5 py-5 group">
      {/* Delete Button */}
      <button
        onClick={() => onDelete(course.id)}
        className="absolute top-3 right-3 cursor-pointer bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-red-600 z-20"
      >
        <FaTrash />
      </button>
      
      {/* Image */}
      <img
        src="/HomeCourse2.png"
        className="w-[95%] h-64 object-cover m-2 rounded-xl"
        alt={course.title}
      />

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Title */}
        <h2 className="text-lg font-semibold">{course.title}</h2>

        {/* Description */}
        <p className="text-gray-600 line-clamp-3 mt-2 text-lg">
          {course.description}
        </p>

        {/* Writer & Price */}
        <div className="flex flex-col gap-1 pt-5">
          <div className="flex justify-around items-center text-md font-medium text-gray-700">
            <span>Created By : {course.author?.username || "Unknown"}</span>
            <span className="mt-2">Price : ${course.price}</span>
          </div>
          <hr className="w-[100%] align-middle" />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
