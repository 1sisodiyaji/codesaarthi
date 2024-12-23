 import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid.tsx";

export default function BentoGridDesign({ data }) {
    return (
      <BentoGrid className="max-w-4xl mx-auto">
        {data.map((item, i) => (
          <BentoGridItem
            key={i} 
            title={item.title}
            slug = {item.slug} 
            header={item.urlToImage ? <img src={item.urlToImage} alt={item.title} className="w-full h-40 object-cover rounded-md" /> : <Skeleton />}
            icon="fi fi-sr-share"
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    );
  }
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
 