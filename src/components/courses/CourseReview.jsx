import React from "react";
import { Layers, PlayCircle, Target, User, DollarSign } from "lucide-react";

const CourseReview = () => {
  return (
    <div className="bg-gray-50  p-8 border border-gray-200 rounded-lg">
      {/* Title */}

      <h2 className="text-xl font-semibold text-gray-900 mb-8">
        Course Review & Publish
      </h2>

      <div className="flex justify-between items-start flex-wrap gap-6">
        {/* Left Stats Section */}
        <div className="flex gap-10 flex-wrap">
          {/* Stat Card */}
          <div className="flex flex-col items-center text-center">
            <div className="text-blue-500 mb-2">
              <Layers className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">Modules</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-green-500 mb-2">
              <PlayCircle className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">Lessons</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-orange-500 mb-2">
              <Target className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">Quizzes</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="text-gray-500 mb-2">
              <User className="w-6 h-6" />
            </div>
            <p className="text-xl font-bold text-gray-900">0</p>
            <p className="text-gray-500 text-sm">Quizzes</p>
          </div>
        </div>

        {/* Right Info Card */}
        <div className="w-64">
          <div className="bg-blue-600 text-white rounded-lg p-4 mb-4">
            <p className="text-sm font-medium">$ Pricing</p>
            <p className="text-2xl font-semibold mt-1">$ 0</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Total Duration</span>
              <span className="text-gray-800 font-medium">0m</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600 items-center">
              <span>Status</span>
              <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full font-medium">
                Draft
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Created</span>
              <span className="text-gray-800 font-medium">9/18/2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseReview;
