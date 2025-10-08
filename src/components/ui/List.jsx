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
                          ? "w-16" // Third column (buttons)
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

  const titles = Object.keys(Data[0]);

  const copyUrl = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => alert("Copied!"))
      .catch(() => alert("Failed to copy"));
  };

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
                  ) : col === "referenceUrl" || col === "code" ? (
                    <button
                      onClick={() => copyUrl(row[col])}
                      className="bg-blue-600 text-xs rounded-2xl h-[30px] w-[70px] text-white cursor-pointer"
                    >
                      copy
                    </button>
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
