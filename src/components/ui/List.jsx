// components/ui/List.jsx
import React from "react";

function List({ Data = [], isLoading = false }) {
  // Show skeleton while loading
  if (isLoading) {
    // Create skeleton with typical column structure
    const skeletonColumns = [
      "Column 1",
      "Column 2",
      "Column 3",
      "Column 4",
      "Column 5",
    ];

    return (
      <div className="w-full overflow-x-auto bg-white rounded-xl">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead className="font-bold">
            <tr>
              {skeletonColumns.map((_, index) => (
                <th
                  key={index}
                  className="px-4 text-left py-5 text-sm font-semibold text-gray-700 border-b"
                >
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-20"></div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 6 }).map((_, rowIndex) => (
              <tr key={`skeleton-row-${rowIndex}`} className="hover:bg-gray-50">
                {skeletonColumns.map((_, colIndex) => (
                  <td key={colIndex} className="px-4 py-2 border-b">
                    <div
                      className={`bg-gray-200 rounded animate-pulse h-4 ${
                        colIndex === 0
                          ? "w-24" // First column
                          : colIndex === 1
                          ? "w-32" // Second column
                          : colIndex === 2
                          ? "w-16" // Third column
                          : colIndex === 3
                          ? "w-20" // Fourth column
                          : "w-28" // Last column
                      }`}
                    ></div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  // Show no data message
  if (Data.length === 0) {
    return <p className="p-4 text-gray-500">No data found.</p>;
  }

  const titles = Object.keys(Data[0]).filter((key) => !key.startsWith("_")); // Exclude hidden fields

  return (
    <div className="w-full overflow-x-auto bg-white rounded-xl">
      <table className="w-full border border-gray-300 rounded-lg">
        <thead className="font-bold">
          <tr>
            {titles.map((title, index) => (
              <th
                key={index}
                className="px-4 text-left py-5 text-sm font-semibold text-gray-700 border-b"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {titles.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2 border-b">
                  {col === "notes" ? (
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      View
                    </span>
                  ) : col === "status" ? (
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        row[col] === "COMPLETED" || row[col] === "active"
                          ? "bg-green-100 text-green-800"
                          : row[col] === "PENDING" || row[col] === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : row[col] === "FAILED" || row[col] === "inactive"
                          ? "bg-red-100 text-red-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {row[col]}
                    </span>
                  ) : (
                    row[col]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
