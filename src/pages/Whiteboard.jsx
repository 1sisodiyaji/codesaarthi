// import React, { useRef, useState } from 'react';

// const Whiteboard = () => {
//   const canvasRef = useRef(null);
//   const [isDrawing, setIsDrawing] = useState(false);
//   const [tool, setTool] = useState('pen'); // Default tool is 'pen'

//   const startDrawing = (event) => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const { offsetX, offsetY } = event.nativeEvent;

//     context.beginPath();
//     context.moveTo(offsetX, offsetY);
//     setIsDrawing(true);
//   };

//   const draw = (event) => {
//     if (!isDrawing) return;

//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     const { offsetX, offsetY } = event.nativeEvent;

//     switch (tool) {
//       case 'pen':
//         context.lineTo(offsetX, offsetY);
//         context.stroke();
//         break;
//       case 'rectangle':
//         context.strokeRect(offsetX, offsetY, 50, 50); // Adjust width and height as needed
//         break;
//       case 'circle':
//         const radius = Math.sqrt(Math.pow(offsetX, 2) + Math.pow(offsetY, 2));
//         context.clearRect(0, 0, canvas.width, canvas.height);
//         context.beginPath();
//         context.arc(offsetX, offsetY, radius, 0, 2 * Math.PI);
//         context.stroke();
//         break;
//       default:
//         break;
//     }
//   };

//   const stopDrawing = () => {
//     setIsDrawing(false);
//   };

//   const changeTool = (selectedTool) => {
//     setTool(selectedTool);
//   };

//   const clearCanvas = () => {
//     const canvas = canvasRef.current;
//     const context = canvas.getContext('2d');
//     context.clearRect(0, 0, canvas.width, canvas.height);
//   };

//   return (
//     <div className="container-fluid design mt-1">
//       <div className="tools">
//         <button onClick={() => changeTool('pen')}>Pen</button>
//         <button onClick={() => changeTool('rectangle')}>Rectangle</button>
//         <button onClick={() => changeTool('circle')}>Circle</button>
//         <button onClick={clearCanvas}>Clear</button>
//       </div>
//       <canvas
//         ref={canvasRef}
//         className="whiteboard-canvas container-fluid p-1"
//         onMouseDown={startDrawing}
//         onMouseMove={draw}
//         onMouseUp={stopDrawing}
//         onMouseOut={stopDrawing}
//       />
//     </div>
//   );
// };

// export default Whiteboard;

import React from 'react'

const Whiteboard = () => {
  return (
    <div>Whiteboard</div>
  )
}

export default Whiteboard