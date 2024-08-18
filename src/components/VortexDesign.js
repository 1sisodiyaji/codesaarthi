import React from "react";
import { Vortex } from "./ui/vortex.tsx";

export function VortexDesign({title , description , button1 , button2}) {
  return (
    <div className="md:w-[calc(100%-4rem)] w-full mx-auto rounded-md  h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
         {title}
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
         {description}
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a href= "#askQuestion" >
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 transition duration-200 rounded-lg text-white shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
           {button1}
          </button>
          </a>
          <a href= "#contribute" >
             <button className="px-4 py-2  text-white "> 
                {button2} 
            </button>
            </a>
        </div>
      </Vortex>
    </div>
  );
}
