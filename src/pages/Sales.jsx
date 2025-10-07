import React, { useState, useEffect } from "react";
import SalesContainer from "../components/sales/SalesContainer";
import List from "../components/ui/List";
import useGetSales from "../hooks/api/useGetSales";
import useSendSalesFilter from "../hooks/api/useSendSalesFilter";

function Sales() {
  const { data: allSales, loading, error } = useGetSales(); // initial data
  const [activeFilters, setActiveFilters] = useState(null); // filters from container
  const { data: filteredData } = useSendSalesFilter(activeFilters); // filtered data

  const [displayData, setDisplayData] = useState([]);

  // Initially show all sales
  useEffect(() => {
    if (!activeFilters) setDisplayData(allSales || []);
  }, [allSales, activeFilters]);

  // Update displayData when filteredData changes
  useEffect(() => {
    if (filteredData) setDisplayData(filteredData);
  }, [filteredData]);

  if (loading) return <p className="p-4">Loading sales data...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <SalesContainer
      onFilter={(filters) => setActiveFilters(filters)} // callback for filter
    >
      <List Data={displayData || []} />
    </SalesContainer>
  );
}

export default Sales;
