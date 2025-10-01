import React from "react";
import useAllCourse from "../../hooks/api/useAllCourse";
import CourseCard from "./CourseCard";

function CourseCardContainer() {
  const { data, loading, error, refetch } = useAllCourse();

  // Delete course function
  const handleDelete = async (id) => {
    try {
      const base = (import.meta.env.VITE_API_URI || "").replace(/\/$/, "");
      const response = await fetch(`${base}/api/v1/course/deleteCourse/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to delete course");

      alert("Course deleted successfully!");
      refetch();
    } catch (err) {
      alert("Error deleting course: " + err.message);
    }
  };

  if (loading) return <p className="p-10">Loading courses...</p>;
  if (error) return <p className="p-10 text-red-500">Error: {error.message}</p>;

  return (
    <div className="w-full h-auto bg-transparent flex p-10 justify-center flex-wrap gap-10">
      {data && data.length > 0 ? (
        data.map((course) => (
          <CourseCard key={course.id} course={course} onDelete={handleDelete} />
        ))
      ) : (
        <p>No courses found</p>
      )}
    </div>
  );
}

export default CourseCardContainer;
