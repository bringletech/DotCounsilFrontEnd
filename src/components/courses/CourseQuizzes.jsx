import React from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";

const CourseQuizzes = () => {
  return (
    <div className="p-6 bg-gray-50 ">
      {/* Header Section */}
      <div className="bg-white shadow-sm rounded-xl p-6 border border-gray-100">
        <h2 className="text-xl font-semibold text-gray-800">Course Quizzes</h2>
        <p className="text-gray-500 text-sm mb-6">
          Create assessments to test student knowledge
        </p>

        {/* Module Section */}
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Module 1: dcv
            </h3>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition">
              <Plus className="w-4 h-4" />
              Add Quiz
            </button>
          </div>

          {/* Quiz Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 text-orange-500 p-2 rounded-full font-bold text-sm w-8 h-8 flex items-center justify-center">
                Q
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Quiz 1</h4>
                <p className="text-gray-500 text-sm">0 questions</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button className="flex items-center gap-1 border border-gray-300 px-2 py-1 rounded-md text-gray-700 hover:bg-gray-100 text-sm">
                <Plus className="w-4 h-4" />
                Question
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <Pencil className="w-4 h-4" />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseQuizzes;
