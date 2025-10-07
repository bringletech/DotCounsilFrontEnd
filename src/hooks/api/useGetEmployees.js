import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useGetEmployees = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          "/api/v1/superAdmin/getAllEmployees"
        );
        setEmployees(response.data.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return { employees, loading, error };
};

export default useGetEmployees;
