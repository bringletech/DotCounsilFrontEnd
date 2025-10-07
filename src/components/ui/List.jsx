import React from "react";
// import { DispositionListData } from "../../constants/constants";

function List({ Data = [] }) {
  if (Data.length === 0) {
    return <p className="p-4 text-gray-500">No data found.</p>;
  }

  const titles = Object.keys(Data[0]);

  const copyUrl = (url) => {
    navigator.clipboard.writeText(url)
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
                <td
                  key={colIndex}
                  className="px-4 py-2 border-b"
                >
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
