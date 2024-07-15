import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";
import RoadmapData from "../../data/RoadmapData";

const StepperSection = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="stepper-section">
      <div className="container-fluid-sm container">
        <div className="row g-0">
          <div className="col-1 d-flex align-self-center">
            <i className="fi fi-rr-hand-back-point-right text-warning"></i>
          </div>
          <div className="col-lg-7 col-10 text-start">
            <h5
              className=" my-2"
              onClick={toggleOpen}
              style={{ cursor: "pointer" }}
            >
              {" "}
              {title}{" "}
              {!isOpen ? (
                <i className="fi fi-sr-lock text-warning"></i>
              ) : (
                <i className="fi fi-sr-unlock text-success"></i>
              )}
            </h5>
            {isOpen && (
              <ul>
                {items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            )}
          </div>
          <div className="col-lg-4 col-1 d-flex align-self-center justify-content-end">
            <i
              className={`fi ${
                isOpen ? "fi-rr-angle-small-up" : "fi-rr-angle-small-down"
              } text-warning`}
              onClick={toggleOpen}
            ></i>
          </div>
        </div>
        <hr className="text-warning" />
      </div>
    </section>
  );
};

const RoadmapDetails = () => {
  const { title } = useParams();
  const [roadmapData, setRoadmapData] = useState(null); 
  useEffect(() => {
    const fetchRoadmapData = async () => {
      try {
        const foundRoadmap = RoadmapData.find((item) => { 
          return item.title === title;
        });

        if (foundRoadmap) {
          setRoadmapData(foundRoadmap);
        }else{
          console.log("no");
        }
      } catch (error) {
        console.error("Error fetching roadmap data:", error);
      }
    };

    fetchRoadmapData();
  }, [title]);

  if (!roadmapData) {
    return <div className="vh-100 "> No Data Found </div>;
  }

  return (
    <>
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Roadmaps , CS Theory Roadmap , Best Roadmap , Top 5 Roadmap , free Roadmaps"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://codesaarthi.com/roadMap/${title}`}
        />
        <meta name="description" content={`${roadmapData.description}`} />
        <title>{`${title} Roadmap | CodeSaarthi`}</title>
        <meta property="og:title" content={`${title} Roadmap | CodeSaarthi`} />
        <meta
          property="og:description"
          content={`${roadmapData.description}`}
        />
        <meta property="og:image" content={roadmapData.thumbnail} />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/roadMap/${title}`}
        />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      <div className="container-fluid design py-3">
        <h1 className="py-3 text-center">{`${title} Roadmap`}</h1>
        <h6 className="  text-center mb-3">{`${roadmapData.description}`}</h6>
        <div className="container g-0">
          <div className="row p-lg-5 p-3 my-2  border border-danger  rounded-8 g-0">
            {roadmapData.topics.map((topic, index) => (
              <div key={index}>
                <Link to={`/theory/${title} `}>
                  {" "}
                  <h5 className="  text-decoration-underline">
                    {topic.headline}
                  </h5>{" "}
                </Link>

                <div
                  className="container-fluid g-0 p-3"
                  style={{ overflowY: "auto" }}
                >
                  <StepperSection title={title} items={topic.points} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapDetails;
