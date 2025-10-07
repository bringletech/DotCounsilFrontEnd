import React, { useState } from "react";
import { RiVideoFill } from "react-icons/ri";
import { useCreateLesson } from "../../hooks/api/useCreateLesson";

const CourseLesson = ({ moduleId }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    order: "",
    video: null,
    thumbnail: null,
  });
  const { createLesson, loading, error, data } = useCreateLesson();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createLesson({
        moduleId,
        title: formData.title,
        description: formData.description,
        order: formData.order,
        video: formData.video,
        thumbnail: formData.thumbnail,
      });
      setShowForm(false);
      setFormData({
        title: "",
        description: "",
        order: "",
        video: null,
        thumbnail: null,
      });
    } catch (err) {
      // error handled via state
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-white relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Course Lessons</h2>
          <p className="text-gray-500 text-sm">
            Add and manage lessons for your course
          </p>
        </div>
      </div>

      {/* Empty State */}
      <div className=" border-2 rounded-md p-8">
        <div className="flex ites-start justify-between">
          <div>
            <span className="font-bold text-black">Module 1:dcv</span>
            <p>0 lessons</p>
          </div>

          <button
            onClick={() => setShowForm(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            <span className="text-xl">+</span>
            Create Lesson
          </button>
        </div>
        <div className="  p-8 flex flex-col items-center justify-center text-center text-gray-500">
          <RiVideoFill />

          <p className="font-medium">No lessons yet</p>
          <p className="text-sm">Start by creating your first lesson.</p>
        </div>
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-sm z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-4">Create New Lesson</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter lesson title"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Enter lesson description"
                  rows="3"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Video Upload */}
              <div>
                <label className="block text-sm font-medium mb-1 ">Video</label>
                <input
                  type="file"
                  name="video"
                  accept="video/*"
                  onChange={handleChange}
                  className="w-full text-sm border-1 p-2"
                  required
                />
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Thumbnail
                </label>
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleChange}
                  className="w-full text-sm border-1 p-2"
                  required
                />
              </div>

              {/* Order */}
              <div>
                <label className="block text-sm font-medium mb-1">Order</label>
                <input
                  type="text"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="Enter lesson order"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Actions */}
              <div className="flex justify-between items-center gap-2">
                <div className="text-left">
                  {!moduleId && (
                    <p className="text-xs text-red-600">Create a module first to get moduleId</p>
                  )}
                  {error && (
                    <p className="text-xs text-red-600">{error.message}</p>
                  )}
                  {data && (
                    <p className="text-xs text-green-600">Lesson created</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!moduleId || loading}
                  className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${
                    (!moduleId || loading) ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Saving...' : 'Save Lesson'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseLesson;
