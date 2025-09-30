import React, { useState } from "react";
import { useCreateModule } from "../../hooks/api/useCreateModule";

const CourseModules = ({ courseId, onModuleCreated }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    order: "",
  });
  const { createModule, loading, error, data } = useCreateModule();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await createModule({
        courseId,
        title: formData.title,
        description: formData.description,
        order: formData.order,
      });
      if (onModuleCreated) onModuleCreated(created);
      setShowForm(false);
      setFormData({ title: "", description: "", order: "" });
    } catch (err) {
      // error is shown below
    }
  };

  return (
    <div className="border rounded-lg p-6 bg-white relative">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-semibold">Course Modules</h2>
          <p className="text-gray-500 text-sm">
            Structure your course into organized modules
          </p>
        </div>
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          <span className="text-xl">+</span>
          Add Module
        </button>
      </div>

      {/* Empty State */}
      <div className="border-2 border-dashed rounded-md p-8 flex flex-col items-center justify-center text-center text-gray-500">
        <p className="font-medium">No modules yet</p>
        <p className="text-sm">Start by adding your first course module.</p>
        {!courseId && (
          <p className="text-xs text-red-600 mt-2">Create a course first to get a courseId</p>
        )}
      </div>

      {/* Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center  bg-[#EFEFEF] bg-opacity-50 z-30 rounded">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-4">Add New Module</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="Enter module title"
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
                  placeholder="Enter module description"
                  rows="3"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Order */}
              <div>
                <label className="block text-sm font-medium mb-1">Order</label>
                <input
                  type="text"
                  name="order"
                  value={formData.order}
                  onChange={handleChange}
                  placeholder="Enter module order"
                  className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Actions */}
              <div className="flex justify-end gap-2">
                {error && (
                  <p className="text-red-600 text-sm">{error.message}</p>
                )}
                {data && (
                  <p className="text-green-600 text-sm">Module created</p>
                )}
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-4 py-2 rounded-md border text-gray-600 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!courseId || loading}
                  className={`px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 ${
                    (!courseId || loading) ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {loading ? 'Saving...' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseModules;
