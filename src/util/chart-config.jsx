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
import { Doughnut, Line, Bar, PolarArea } from "react-chartjs-2"; // ✅ Added PolarArea

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

const ChartCard = ({ type, data, options, title }) => {
  const renderChart = () => {
    switch (type) {
      case "line":
        return <Line data={data} options={options} />;
      case "bar":
        return <Bar data={data} options={options} />;
      case "doughnut":
        return <Doughnut data={data} options={options} />;
      case "polar": // ✅ Added 4th chart
        return <PolarArea data={data} options={options} />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md h-90 flex flex-col">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="flex-1 w-full h-78 mt-2">{renderChart()}</div>
    </div>
  );
};

export default ChartCard;
