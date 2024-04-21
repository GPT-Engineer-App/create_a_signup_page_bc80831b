import React from "react";

const AreaGraph = () => {
  const graphData = [20, 30, 40, 50, 60, 70, 80, 90, 100]; // Dummy data points

  // Convert the data points into SVG path commands
  const pathData = graphData.reduce((acc, point, i, arr) => {
    const x = (i / (arr.length - 1)) * 100;
    const y = 100 - point; // Invert the y-axis for proper SVG coordinates
    return `${acc} ${x},${y}`;
  }, "M");

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ width: "100%", height: "200px" }}>
      <path d={`${pathData} V100 H0 Z`} fill="blue" opacity="0.3" />
      <path d={pathData} fill="none" stroke="blue" strokeWidth="2" />
    </svg>
  );
};

export default AreaGraph;
