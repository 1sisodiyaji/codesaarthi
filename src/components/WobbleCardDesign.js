import React from "react";
import { WobbleCard } from "./ui/wobble-card.tsx";

export function WobbleCardDesign() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Explore Our Courses
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          Dive into a wide range of courses designed to equip you with the skills you need for the future. From coding to design, we have everything you need to succeed.
        
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/ducw7orvn/image/upload/v1724613750/WhatsApp_Image_2024-08-26_at_00.50.59_bdbc93fe_aydtcg.jpg"
          width={500}
          height={500}
          alt="linear demo"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Essential Tools for Your Projects
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        Discover a curated list of tools that can enhance your productivity and streamline your workflow. These tools are handpicked to ensure you have the best resources at your disposal.
     
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Follow the Roadmaps to Success
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          Our comprehensive roadmaps guide you through the learning paths, ensuring you acquire the knowledge step by step. Start your journey today and reach your goals with confidence.
       
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/ducw7orvn/image/upload/v1724613750/WhatsApp_Image_2024-08-26_at_00.51.59_fdcec28c_h4usiv.jpg"
          width={500}
          height={500}
          alt="linear demo "
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
