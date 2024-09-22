 
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import axios from "axios"; 
import config from "../../helper/config";

const StepperSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
       <h3 className="font-medium leading-tight"> {title}  </h3> 
        <span className="">
          {isOpen ? (
            <svg className="inline w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="inline w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </div>
      
      {isOpen && (
        <ol className="relative text-gray-500 border-l border-gray-200 dark:border-gray-700 dark:text-gray-400 my-2">
          {items.map((item, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className={`absolute flex items-center justify-center w-8 h-8 ${index === 0 ? 'bg-green-200 dark:bg-green-900' : 'bg-gray-100 dark:bg-gray-700'} rounded-full -left-4 ring-4 ring-white dark:ring-gray-900`}>
                {index === 0 ? (
                  <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917L5.724 10.5 15 1.5"/>
                  </svg>
                ) : (
                  <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                  </svg>
                )}
              </span>
              <p className="text-sm">{item}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

const SingleRoadmap = () => {
  const { slug } = useParams();
  const [roadmapData, setRoadmapData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRoadmapData = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/admin/getRoadmap/${slug}`); // Replace with actual API endpoint
        setRoadmapData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching roadmap data:", error);
        setLoading(false);
      }
    };

    fetchRoadmapData();
  }, [slug]);

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!roadmapData) {
    return <div className="flex justify-center items-center h-screen">No Data Found</div>;
  }

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Roadmaps, CS Theory Roadmap, Best Roadmap, Top 5 Roadmap, free Roadmaps"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://codesaarthi.com/Roadmap/${slug}`}
        />
        <meta name="description" content={`${roadmapData.description}`} />
        <title>{`${slug} Roadmap | CodeSaarthi`}</title>
        <meta property="og:title" content={`${slug} Roadmap | CodeSaarthi`} />
        <meta
          property="og:description"
          content={`${roadmapData.description}`}
        />
        <meta property="og:image" content={roadmapData.thumbnail} />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/Roadmap/${slug}`}
        />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      <div className="min-h-screen bg-slate-100 dark:bg-gray-950 mx-auto py-20">
        <h1 className="text-4xl font-bold text-center mb-6">{`${roadmapData.title} Roadmap`}</h1>
        <h6 className="text-lg text-center mb-8">{`${roadmapData.description}`}</h6>
        <div className="max-w-7xl m-auto p-6 rounded-lg shadow-lg">
          {roadmapData.topics.map((topic, index) => (
            <div key={index} className="mb-4">
              <Link to={`/Theory/${slug}`}>
                <h5 className="text-2xl font-medium text-blue-600  ">
                  {topic.headline}
                </h5>
              </Link>
              <div className="bg-white dark:bg-gray-800 p-4 mt-2 rounded-lg overflow-y-auto">
                <StepperSection title={slug} items={topic.points} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleRoadmap;
