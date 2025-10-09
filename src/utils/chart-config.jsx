import React from "react";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Doughnut, Line, Bar, PolarArea } from "react-chartjs-2";

// Register Chart.js modules
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement
);

const ChartCard = ({ type, data, options, title, isLoading = false }) => {
  const renderChart = () => {
    switch (type) {
      case "line":
        return <Line data={data} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      default:
        return null;
    }
  };

  const renderChartSkeleton = () => {
    if (type === "doughnut") {
      return (
        <div className="flex items-center justify-center h-full">
          <div className="w-48 h-48 rounded-full border-8 border-gray-200 animate-pulse"></div>
        </div>
      );
    }

    return (
      <div className="w-full h-full flex flex-col justify-end space-y-2">
        {/* Chart bars/lines skeleton */}
        <div className="flex items-end justify-between h-40 space-x-1">
          {Array.from({ length: type === "line" ? 8 : 6 }).map((_, index) => (
            <div
              key={index}
              className={`bg-gray-200 animate-pulse ${
                type === "line" ? "w-1 rounded-full" : "rounded-t"
              }`}
              style={{
                height: `${Math.random() * 80 + 20}%`,
                width: type === "line" ? "2px" : "calc(100% / 6 - 2px)",
              }}
            ></div>
          ))}
        </div>

        {/* X-axis labels skeleton */}
        <div className="flex justify-between space-x-1">
          {Array.from({ length: type === "line" ? 8 : 6 }).map((_, index) => (
            <div
              key={index}
              className="h-3 bg-gray-200 rounded animate-pulse"
              style={{ width: "calc(100% / 6 - 2px)" }}
            ></div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full h-90 flex flex-col">
      {/* Title skeleton or actual title */}
      {isLoading ? (
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
      ) : (
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
      )}

      {/* Chart content */}
      <div className="flex-1 w-full overflow-hidden h-auto mt-2">
        {isLoading ? renderChartSkeleton() : renderChart()}
      </div>
    </div>
  );
};

export default ChartCard;
