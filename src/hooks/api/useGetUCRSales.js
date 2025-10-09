// hooks/api/useGetUCRSales.js
import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";

const useGetUCRSales = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUCRSales = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance.get(
          "/api/v1/superAdmin/ucrPayments"
        );

        // Transform data to only include specified columns
        const transformedData = response.data.data.data.map((item, index) => ({
          // Only the columns you specified
          ucrId: item.ucrId,
          amount: `$${item.amount?.toLocaleString() || 0}`,
          status: item.status,
          createdAt: new Date(item.createdAt).toLocaleDateString(),
          email: item.payer?.email || "N/A",
          companyName: item.payer?.companyName || "N/A",
          dotNumber: item.payer?.dotNumber || "N/A",
          year: item.ucrDetails?.year || "N/A",
          totalVehicles: item.ucrDetails?.totalVehicles || 0,

          // Hidden fields for filtering (not displayed in table)
          _rawAmount: item.amount,
          _rawDate: item.createdAt,
          _rawStatus: item.status,
          _searchFields: [
            item.payer?.email,
            item.payer?.companyName,
            item.payer?.dotNumber?.toString(),
            item.ucrId?.toString(),
          ]
            .filter(Boolean)
            .join(" ")
            .toLowerCase(),
        }));

        setData(transformedData);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUCRSales();
  }, []);

  return { data, loading, error };
};

export default useGetUCRSales;
