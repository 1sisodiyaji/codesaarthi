import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card.tsx";
import { Link } from "react-router-dom";
import TimeConverter from "../helper/TimeConverter.js";
import { handleCopyText, handleShareLinkedIn, handleShareWhatsApp } from "../helper/Share.js";

export function Card({title,slug, image , description , content ,url , publishedAt , Author, SourceName,type}) {
  
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {title}
        </CardItem>
       <div className="flex justify-between">
       <CardItem
          translateZ="50"
          className="text-sm   text-neutral-600 dark:text-white"
        >
          Author : {Author}
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-sm   text-neutral-600 dark:text-white"
        >
          Source :  {SourceName}
        </CardItem>
       </div>
       <CardItem
          translateZ="50"
          className=" badge badge-accent "
        >
         <TimeConverter date = {publishedAt} />
        </CardItem>
     
        <CardItem translateZ="100" className="w-full mt-4">
          <img
          src= {image}
           height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {description} <br/> {content}
        </CardItem>
     
        <div className="flex justify-between items-center mt-20"> 
        <CardItem
            translateZ={20}
            as={Link}
            to={url} 
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Read More →
          </CardItem>
        
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
              <div className="dropdown"> 
                 
        
              <div tabIndex={0} role="button">Share   <i className="fi fi-sr-share"></i>
              <ul tabIndex={0} className="dropdown-content menu bg-base-100 dark:bg-slate-400 rounded-box z-[1] w-28 space-y-4 p-4 shadow text-center">
                <li className="cursor-pointer" onClick={() => handleCopyText(`${window.location.origin}/${type? type : 'news'}/${slug}`)}>Copy</li>
                <li className="cursor-pointer" onClick={() => handleShareWhatsApp(`${window.location.origin}/${type? type : 'news'}/${slug}`)}>Whatsapp</li>
                <li className="cursor-pointer" onClick={() => handleShareLinkedIn(`${window.location.origin}/${type? type : 'news'}/${slug}`)}>Linkedin</li>
              </ul>
              </div>
              </div>
          </CardItem>
      
        </div>
      </CardBody>
    </CardContainer>
  );
}
