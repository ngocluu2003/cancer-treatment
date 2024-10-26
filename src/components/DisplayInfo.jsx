import React, { useState } from "react";
import { useMetricsData } from "../lib/utils";
import MetricsCard from "./MetricsCard";

const DisplayInfo = () => {
  const [metrics, setMetrics] = useState({
    totalFolders: 0,
    aiPersonalizedTreatment: 0,
    totalScreenings: 0,
    personalScreenings: 0,
    pendingScreening: 0,
    overdueScreenings: 0,
  });

  const metricsData = useMetricsData(metrics);

  return (
    <div className="flex flex-wrap gap-[26px]">
      <div className="mt-7 grid w-full gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
        {metricsData.slice(0, 2).map((metric) => (
          <MetricsCard key={metric.title} {...metric} />
        ))}
      </div>
      <div></div>
    </div>
  );
};

export default DisplayInfo;
