import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useSendSalesFilter = (filters) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filters) return; // don't call if no filters

    const fetchFilteredSales = async () => {
      setLoading(true);
      try {
        const params = {
          search: filters.search || "",
          courseId: filters.course || "",
          startDate: filters.startDate?.replace(/-/g, "/") || "",
          endDate: filters.endDate?.replace(/-/g, "/") || "",
        };

        const response = await axiosInstance.get("/api/v1/superAdmin/sales", {
          params,
        });

        console.log("Filtered sales:", response.data.data.data);
        setData(response.data.data || []);
        setError(null);
      } catch (err) {
        console.error("Filter API Error:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchFilteredSales();
  }, [filters]);

  return { data, loading, error };
};

export default useSendSalesFilter;
