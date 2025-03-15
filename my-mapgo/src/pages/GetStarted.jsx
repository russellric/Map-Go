import React, { useEffect, useRef, useState } from "react";
import * as fabric from "fabric";

const GettingStarted = () => {
   const canvasRef = useRef(null);
   const [canvas, setCanvas] = useState(null);

   useEffect(() => {
      // initialize Fabric.js canvas
      const fabricCanvas = new fabric.Canvas(canvasRef.current, {
         width: 800,
         height: 500,
         backgroundColor: "#f3f3f3",
      });

      setCanvas(fabricCanvas);

      return () => {
         fabricCanvas.dispose(); // cleanup on unmount
      };
   }, []);

   // add text box
   const addText = () => {
      const text = new fabric.Textbox("Edit me", {
         left: 100,
         top: 100,
         fontSize: 20,
         fill: "black",
         borderColor: "blue",
         editingBorderColor: "black",
      });
      canvas.add(text);
      canvas.renderAll();
   };

   // add rectangle
   const addRectangle = () => {
      const rect = new fabric.Rect({
         left: 150,
         top: 150,
         fill: "blue",
         width: 100,
         height: 100,
         selectable: true,
      });
      canvas.add(rect);
      canvas.renderAll();
   };

   return (
      <div>
         <h2>Test Canvas</h2>
         <button onClick={addText}>Add Text</button>
         <button onClick={addRectangle}>Add Rectangle</button>
         <canvas ref={canvasRef} style={{ border: "1px solid black" }} />
      </div>
   );
};

export default GettingStarted
