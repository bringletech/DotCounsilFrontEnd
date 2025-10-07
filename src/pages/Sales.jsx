// pages/Sales.jsx
import React from "react";
import SalesContainer from "../components/sales/SalesContainer";
import List from "../components/ui/List";
import useGetSales from "../hooks/api/useGetSales";

function Sales() {
  const { data, loading, error } = useGetSales();
  console.log(data);

  if (loading) return <p className="p-4">Loading sales data...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error.message}</p>;

  return (
    <SalesContainer>
      {/* Pass fetched data to List component */}
      <List Data={data||[]} />
    </SalesContainer>
  );
}

export default Sales;
