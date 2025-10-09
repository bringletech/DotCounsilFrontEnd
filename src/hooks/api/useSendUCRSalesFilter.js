// hooks/api/useSendUCRSalesFilter.js
import { useState, useEffect } from "react";

const useSendUCRSalesFilter = (filters) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!filters) {
      setData(null);
      setLoading(false);
      return;
    }

    // Since we're doing frontend filtering only, we'll return null
    // The actual filtering will be done in the parent component
    setLoading(false);
    setData(null);
  }, [filters]);

  return { data, loading, error };
};

export default useSendUCRSalesFilter;
