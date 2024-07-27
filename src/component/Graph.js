import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const Graph = ({ options }) => {
  const CanvasJSChart = CanvasJSReact.CanvasJSChart;
  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default Graph;
