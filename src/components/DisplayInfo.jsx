import React, { useState } from "react";

const DisplayInfo = () => {
  const [metrics, setMetrics] = useState({
    totalFolders: 0,
    aiPersonalizedTreatment: 0,
    totalScreenings: 0,
    personalScreenings: 0,
    pendningScreening: 0,
    overdueScreenings: 0,
  });
  return <div className="text-white">DisplayInfo</div>;
};

export default DisplayInfo;
