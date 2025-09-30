import React, { useState } from "react";
import { useCreateCourse } from "../../hooks/api/useCreateCourse";

const CourseForm = ({ onCreated }) => {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [price, setPrice] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [status, setStatus] = useState("FREE");

  const { createCourse, loading, error, data } = useCreateCourse();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const created = await createCourse({
        title: courseTitle,
        description: courseDescription,
        price,
        isPublished,
        status,
      });
      if (onCreated) onCreated(created);
      // Optionally reset
      setCourseTitle("");
      setCourseDescription("");
      setPrice("");
      setIsPublished(false);
      setStatus("FREE");
    } catch (err) {
      console.log("Error creating course:", err);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-6">Course Basics</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block font-medium mb-2">Course Title</label>
          <input
            type="text"
            value={courseTitle}
            onChange={(e) => setCourseTitle(e.target.value)}
            placeholder="Enter course title..."
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
          />
        </div>
        {/* Description */}
        <div>
          <label className="block font-medium mb-2">Course Description</label>
          <textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            placeholder="Describe what students will learn in this course..."
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
            rows="3"
          />
        </div>
        {/* <div>
          <label className="block font-medium mb-2">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full border rounded-md px-3 py-2"
          >
            <option value="">All Status</option>
            <option value="development">Development</option>
            <option value="design">Design</option>
            <option value="marketing">Marketing</option>
          </select>
        </div> */}
        {/* Thumbnail */}
        {/* Price & Currency */}
        <div className="border rounded-lg p-4">
          <h3 className="font-semibold">Course Status</h3>

          <div className="mt-3">
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="PAID">PAID</option>
              <option value="FREE">FREE</option>
              <option value="COMING_SOON">COMING_SOON</option>
            </select>
          </div>
        </div>
        <div className="">
          <label className="block font-medium mb-2">Price</label>
          <input
            type="number"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            placeholder="$ 0"
            className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
            disabled={status !== "PAID"}
            min={0}
          />

          {/* <div>
            <label className="block font-medium mb-2">Currency</label>
            <select
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full border rounded-md px-3 py-2"
            >
              <option>USD ($)</option>
              <option>EUR (€)</option>
              <option>INR (₹)</option>
            </select>
          </div> */}
        </div>
        {/* Course Status */}

        <div className="border rounded-lg p-4">
          <div className="mt-3">
            <label className="block text-sm font-medium mb-1">
              isPublished
            </label>
            <select
              value={isPublished ? "true" : "false"}
              onChange={(e) => setIsPublished(e.target.value === "true")}
              className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="true">TRUE</option>
              <option value="false">FAlSE</option>
            </select>
          </div>
        </div>

        {/* Feedback */}
        {error && (
          <p className="text-red-600 text-sm">
            {error.message || "Failed to create course"}
          </p>
        )}
        {data && (
          <p className="text-green-600 text-sm">Course created successfully</p>
        )}

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Saving..." : "Create Course"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CourseForm;
