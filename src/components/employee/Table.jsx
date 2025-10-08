import React from "react";
import SkeletonCard from "../ui/SkeletonCard"; // Import from ui folder

const Table = ({ columns, data, isLoading = false }) => {
  // Create skeleton rows
  const renderSkeletonRows = () => {
    return Array.from({ length: 5 }).map((_, rowIndex) => (
      <tr
        key={`skeleton-${rowIndex}`}
        className="bg-transparent hover:bg-gray-50"
      >
        {columns.map((col, colIndex) => (
          <td
            key={`skeleton-cell-${rowIndex}-${colIndex}`}
            className="p-3 border-b text-center"
          >
            <SkeletonCard />
          </td>
        ))}
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto border rounded-lg shadow-md">
      <table className="w-full text-left border-collapse border-[#DFDFDF]">
        <thead className="bg-gray-100 text-center">
          <tr className="text-center">
            {columns.map((col) => (
              <th key={col.key} className="p-3 font-bold border-b text-black">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            renderSkeletonRows()
          ) : data.length > 0 ? (
            data.map((row, idx) => (
              <tr
                key={idx}
                className="bg-transparent font-semibold hover:bg-gray-50"
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`p-3 border-b text-center ${
                      col.key === "email"
                        ? "text-gray-500 lowercase"
                        : col.key === "status"
                        ? ""
                        : "text-black"
                    }`}
                  >
                    {col.key === "status" ? (
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          row[col.key] === "active"
                            ? "border-1 border-green-700 text-green-700 bg-[#b8f0d1]"
                            : "bg-red-200 border-1 border-red-700 text-red-700"
                        }`}
                      >
                        {row[col.key]}
                      </span>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center p-3 text-gray-500"
              >
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
