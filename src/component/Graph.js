import React from 'react';
import { Chart } from 'react-google-charts';

const Graph = ({ options }) => {
  // Extracting chart type and data from options
  const { chartType, data, width, height } = options;

  return (
    <div>
      <Chart
        chartType={chartType}
        data={data}
        width={width || "100%"}
        height={height || "400px"}
        legendToggle
      />
    </div>
  );
};

export default Graph;
