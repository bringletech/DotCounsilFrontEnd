import { useState, useEffect } from "react";

const useAllCourse = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      // Get base API URL from .env
      const base = (import.meta.env.VITE_API_URI || "").replace(/\/$/, "");
      if (!base) throw new Error("VITE_API_URI is not set");

      const url = `${base}/api/v1/course/getAllCourses`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      setData(result.data || []); // set courses
    } catch (err) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllCourses();
  }, []);

  return { data, loading, error, refetch: getAllCourses };
};

export default useAllCourse;
