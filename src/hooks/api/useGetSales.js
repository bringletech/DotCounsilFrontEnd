// hooks/useGetSales.js
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useGetSales = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSales = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get("/api/v1/superAdmin/sales");

        setData(response.data.data.data); 
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchSales();
  }, []);

  return { data, loading, error };
};

export default useGetSales;
