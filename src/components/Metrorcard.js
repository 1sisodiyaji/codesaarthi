import React from "react";
import { Meteors } from "./ui/meteors.tsx";
import { Link } from "react-router-dom";

export function MeteorsCard({
    title,
    CompanyName,
    Location,
    minSalary,
    maxSalary,
    description,
    link,
  }) {
  return (
    <div className="w-full relative max-w-4xl">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative shadow-xl bg-gray-900 dark:bg-gray-800 border border-gray-800 dark:border-gray-700 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500 dark:border-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-2 w-2 text-gray-300 dark:text-gray-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
            />
          </svg>
        </div>

        <h1 className="font-bold text-xl text-white dark:text-gray-100 mb-4 relative z-50">
          {title}
        </h1>
        <div className="text-xs font-normal text-gray-100">
          Company : <span>{CompanyName}</span> 
        </div>
        <div className="text-xs my-1 text-gray-300">
          Location : {Location}
        </div>
        <div className="text-xs text-green-200">
          Salary : {minSalary} - {maxSalary}
        </div>

        <small className="font-normal text-xs text-slate-500 dark:text-slate-400 my-4 relative z-50">
          {description}
        </small>
        <Link to={link} target="blank">
          <button className="border px-4 py-1 rounded-lg border-gray-500 dark:border-gray-400 text-gray-300 dark:text-gray-200">
            Apply Now
          </button>
        </Link>
        {/* Meteor effect */}
        <Meteors number={20} />
      </div>
    </div>
  );
}
