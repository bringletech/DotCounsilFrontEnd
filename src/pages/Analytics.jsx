import React from "react";
import Hero from "../components/dashboard/Hero";
import DashCardContainer from "../components/dashboard/DashCardContainer";
import {
  lineData,
  RevenueBarData,
  barData,
  progressBarData,
  options,
  progressBarOptions,
  convProgressBarData,
} from "../constants/constants";
import FilterExportCard from "../components/analytics/Filterexports";

function Analytics() {
  return (
    <>
      <Hero title={"Analytics Dashboard"}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, nihil.
      </Hero>

      <div className="mt-10">
        <FilterExportCard></FilterExportCard>
      </div>

      <div className="mt-10">
        <DashCardContainer
          type="analysis"
          analysisStats={{
            TotalRevenue: 120000,
            TotalEnrollment: 3400,
            completionRate: "78%",
            AvgRevenueUser: 350,
          }}
        />
      </div>

      <div className="flex gap-2 w-full mt-5">
        <div className="w-1/2">
          <ChartCard
            title={"Enrollment Trends"}
            type={"line"}
            data={lineData}
            options={options}
          ></ChartCard>
        </div>
        <div className="w-1/2">
          <ChartCard
            title={"Conversion Funnel"}
            type={"bar"}
            data={convProgressBarData}
            options={progressBarOptions}
          ></ChartCard>
        </div>
      </div>

      <div className="w-full h-auto mt-5">
        <ChartCard
          title={"revenue analysis chart "}
          type={"bar"}
          data={RevenueBarData}
          options={options}
        ></ChartCard>
      </div>
    </>
  );
}

export default Analytics;
