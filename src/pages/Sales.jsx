import React, { useState, useEffect } from "react";
import SalesContainer from "../components/sales/SalesContainer";
import List from "../components/ui/List";
import useGetSales from "../hooks/api/useGetSales";
import useSendSalesFilter from "../hooks/api/useSendSalesFilter";

function Sales() {
  const { data: allSales, loading: initialLoading, error } = useGetSales(); // initial data
  const [activeFilters, setActiveFilters] = useState(null); // filters from container
  const { data: filteredData, loading: filterLoading } =
    useSendSalesFilter(activeFilters); // filtered data

  const [displayData, setDisplayData] = useState([]);

  // Determine overall loading state
  const isLoading = initialLoading || (activeFilters && filterLoading);

  // Initially show all sales
  useEffect(() => {
    if (!activeFilters) setDisplayData(allSales || []);
  }, [allSales, activeFilters]);

  // Update displayData when filteredData changes
  useEffect(() => {
    if (filteredData) setDisplayData(filteredData);
  }, [filteredData]);

  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <SalesContainer
      onFilter={(filters) => setActiveFilters(filters)} // callback for filter
    >
      <List Data={displayData || []} isLoading={isLoading} />
    </SalesContainer>
  );
}

export default Sales;
