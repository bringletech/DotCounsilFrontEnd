import React, { useState } from "react";
import useAllCourse from "../../hooks/api/useAllCourse";
import CourseCard from "./CourseCard";

function CourseCardContainer() {
  const { data, loading, error, refetch } = useAllCourse();
  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  // Step 1: When user clicks delete icon
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowConfirm(true);
  };

  // Step 2: Confirm delete
  const handleConfirmDelete = async () => {
    try {
      const base = (import.meta.env.VITE_API_URI || "").replace(/\/$/, "");
      const response = await fetch(
        `${base}/api/v1/course/deleteCourse/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) throw new Error("Failed to delete course");

      alert("Course deleted successfully!");
      refetch();
    } catch (err) {
      alert("Error deleting course: " + err.message);
    } finally {
      setShowConfirm(false);
      setDeleteId(null);
    }
  };

  if (loading) return <p className="p-10">Loading courses...</p>;
  if (error) return <p className="p-10 text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full h-auto bg-transparent flex p-10 justify-center flex-wrap gap-10">
      {data && data.length > 0 ? (
        data.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onDelete={handleDeleteClick} // pass click handler
          />
        ))
      ) : (
        <p>No courses found</p>
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="fixed inset-0 bg-transparent bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-100 text-center">
            <h2 className="text-xl font-semibold mb-4">
              Are you sure you want to delete this course?
            </h2>
            <div className="flex justify-center gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 text-xl"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 text-xl"
              >
                Ok
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCardContainer;
