// pages/UCRSales.jsx (Updated with frontend filtering)
import React, { useState, useEffect, useMemo } from "react";
import UCRSalesContainer from "../components/ucr-sales/UCRSalesContainer";
import List from "../components/ui/List";
import useGetUCRSales from "../hooks/api/useGetUCRSales";

function UCRSales() {
  const {
    data: allUCRSales,
    loading: initialLoading,
    error,
  } = useGetUCRSales(); // initial data
  const [activeFilters, setActiveFilters] = useState(null); // filters from container

  const [displayData, setDisplayData] = useState([]);

  // Frontend filtering
  const filteredData = useMemo(() => {
    if (!activeFilters || !allUCRSales || allUCRSales.length === 0) {
      return allUCRSales || [];
    }

    return allUCRSales.filter((item) => {
      // Search filter
      if (activeFilters.search) {
        const searchTerm = activeFilters.search.toLowerCase();
        if (!item._searchFields.includes(searchTerm)) {
          return false;
        }
      }

      // Status filter
      if (activeFilters.status && item._rawStatus !== activeFilters.status) {
        return false;
      }

      // Date range filter
      if (activeFilters.startDate || activeFilters.endDate) {
        const itemDate = new Date(item._rawDate);

        if (activeFilters.startDate) {
          const startDate = new Date(activeFilters.startDate);
          if (itemDate < startDate) return false;
        }

        if (activeFilters.endDate) {
          const endDate = new Date(activeFilters.endDate);
          endDate.setHours(23, 59, 59, 999);
          if (itemDate > endDate) return false;
        }
      }

      return true;
    });
  }, [allUCRSales, activeFilters]);

  // Update display data when filters change
  useEffect(() => {
    if (!activeFilters) {
      setDisplayData(allUCRSales || []);
    } else {
      setDisplayData(filteredData);
    }
  }, [allUCRSales, activeFilters, filteredData]);

  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <UCRSalesContainer
      onFilter={(filters) => setActiveFilters(filters)} // callback for filter
    >
      <List Data={displayData || []} isLoading={initialLoading} />
    </UCRSalesContainer>
  );
}

export default UCRSales;
