// hooks/api/useGetCourses.js
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useGetCourses = () => {
  const [courses, setCourses] = useState([]); // dropdown options
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/course/getAllCourses");
        // extract courses array, adjust if nested
        setCourses(response.data.data || []);
      } catch (err) {
        console.error(err);
        setError(err);
      }
    };

    fetchCourses();
  }, []);

  return { courses, error };
};

export default useGetCourses;
