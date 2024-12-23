import React from "react";
import { cn } from "../../lib/utils.ts";
import TruncateText from "../../helper/TruncateText.js";
import { Link } from "react-router-dom";
import { handleCopyText , handleShareWhatsApp , handleShareLinkedIn } from "../../helper/Share.js";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-8xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
 
export const BentoGridItem = ({
  className,
  title,
  slug, 
  header,
  icon,
}: {
  className?: string;
  slug?: string;
  title?: string | React.ReactNode; 
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-2",
        className
      )}
    > 
    {header}
      
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <Link to ={`/news/${slug}`}>
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200  mt-1">
        <TruncateText text = {title} maxLength = {'90'}/>
        </div>
        </Link> 
        <div className="flex justify-end mt-2"> 
        <div className="dropdown">
        <div tabIndex={0} role="button"><i className={`${icon}`}></i></div>
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-28 space-y-4 p-4 shadow text-center">
          <li className="cursor-pointer" onClick={() => handleCopyText(`${window.location.origin}/news/${slug}`)}>Copy</li>
          <li className="cursor-pointer" onClick={() => handleShareWhatsApp(`${window.location.origin}/news/${slug}`)}>Whatsapp</li>
          <li className="cursor-pointer" onClick={() => handleShareLinkedIn(`${window.location.origin}/news/${slug}`)}>Linkedin</li>
        </ul>
      </div>
      </div>
      </div>
    </div>
  );
};
