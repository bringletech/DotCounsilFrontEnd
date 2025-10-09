import React from "react";
import { cardDetail, AnalyticscardDetail } from "../../constants/constants";
import DashCardSmall from "./DashCardSmall";

const DASH_CARD_KEYS = {
  "Total Users": "totalUsers",
  "Total Employees": "totalEmployees",
  "Total Courses": "totalCourses",
  Revenue: "totalRevenue",
};

const ANALYTICS_CARD_KEYS = {
  "Total Revenue": "TotalRevenue",
  "Total Enrollment": "TotalEnrollment",
  "Completion Rate": "completionRate",
  "Avg Revenue User": "AvgRevenueUser",
};

function DashCardContainer({
  type,
  stats = {},
  analysisStats = {},
  isLoading = false,
}) {
  const cards = type === "dash" ? cardDetail : AnalyticscardDetail;

  return (
    <div className="cards w-full flex gap-2">
      {cards.map((card, idx) => {
        let digits = 0;

        if (type === "dash") {
          const key = DASH_CARD_KEYS[card.title];
          digits = key ? Number(stats[key] ?? 0) : 0;
        }

        if (type === "analysis") {
          const key = ANALYTICS_CARD_KEYS[card.title];
          digits = key ? Number(analysisStats[key] ?? 0) : 0;
        }

        return (
          <DashCardSmall
            key={idx}
            {...card}
            digits={digits}
            isLoading={isLoading}
          />
        );
      })}
    </div>
  );
}

export default DashCardContainer;
