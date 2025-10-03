import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useAllCourse = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getAllCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axiosInstance.get('/api/v1/course/getAllCourses');
      if (response.status !== 200 && response.status !== 201) {
        throw new Error(`Error: ${response.status}`);
      }
      setData(response.data.data || []); // set courses
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
