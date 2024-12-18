// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { Helmet } from "react-helmet";
// import config from "../../config/config";
// import CourseData from "../../data/Course";
// import Loading from "../../component/Loading";
// import TimeConverter from "../../config/TimeConverter";
// import SideCard from "../../component/SideCard";

// const Content = () => {
//   const { title } = useParams();
//   const [course, setCourse] = useState([]);
//   const [blogs, setBlogs] = useState([]);
//   const [selectedTopic, setSelectedTopic] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [count, setCount] = useState(() => {
//     const storedCount = localStorage.getItem("topicProgress");
//     return storedCount ? JSON.parse(storedCount) : 1;
//   });

//   useEffect(() => {
//     const foundCourse = CourseData.find((item) => item.title === title);
//     if (foundCourse) {
//       setCourse(foundCourse);
//     }

//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.post(`${config.BASE_URL}/article/getArticleData`);
//         const formattedBlogs = response.data.map((blog) => ({
//           ...blog,
//           formattedDate: <TimeConverter date={blog.date} />
//         }));
//         const sortedBlogs = formattedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
//         setBlogs(sortedBlogs.slice(0, 5));
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       }
//     };

//     fetchBlogs();
//   }, [title]);

//   useEffect(() => {
//     if (course && course.topics && course.topics[selectedTopic]) {
//       const topicName = course.topics[selectedTopic].title;
//       if (topicName) {
//         document.title = `${topicName} | Codesaarthi`;
//         document
//           .querySelector('meta[property="og:title"]')
//           .setAttribute("content", `${topicName} | Codesaarthi`);
//       } else {
//         document
//           .querySelector('meta[property="og:title"]')
//           .setAttribute("content", "Codesaarthi");
//         document.title = "Codesaarthi";
//       }
//     } else {
//       document
//         .querySelector('meta[property="og:title"]')
//         .setAttribute("content", "Codesaarthi");
//       document.title = "Codesaarthi";
//     }
//   }, [selectedTopic, course]);

//   const progress = course && course.topics ? Math.min((count / course.topics.length) * 100, 100) : 0;
//   useEffect(() => {
//     localStorage.setItem("topicProgress", JSON.stringify(count));
//   }, [count]);

//   const handleTopicClick = (index) => {
//     setSelectedTopic(index);
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const goToPreviousTopic = () => {
//     if (selectedTopic > 0) {
//       setSelectedTopic(selectedTopic - 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   const goToNextTopic = () => {
//     if (course && course.topics && selectedTopic < course.topics.length - 1) {
//       setSelectedTopic(selectedTopic + 1);
//       setCount(count + 1);
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   if (!course) {
//     return <Loading message="Fetching Course Details" />;
//   }

//   return (
//     <>
//       <Helmet>
//         <meta
//           name="keywords"
//           content="React js , learn react js from scratch , version 19 react details , new updates on react , react structure."
//         />
//         <meta name="robots" content="index, follow" />
//         <link rel="canonical" href={`https://codesaarthi.com/theory/${title}`} />
//         <meta name="description" content={course.description} />
//         <title>
//           {course.topics && course.topics[selectedTopic]
//             ? `${course.topics[selectedTopic].title} | Codesaarthi`
//             : "Codesaarthi"}
//         </title>
//         <meta
//           property="og:title"
//           content={
//             course.topics && course.topics[selectedTopic]
//               ? course.topics[selectedTopic].title
//               : "Codesaarthi"
//           }
//         />
//         <meta property="og:description" content={course.description} />
//         <meta property="og:image" content={course.thumbnailImage} />
//         <meta
//           property="og:url"
//           content={`https://codesaarthi.com/theory/${title}`}
//         />
//         <meta property="og:type" content="Education-Website" />
//         <link
//           rel="icon"
//           type="image/png"
//           href="https://codesaarthi.com/img/favicon.ico"
//           sizes="32x32"
//         />
//       </Helmet>

//       <div className="container-fluid design">
//         <div className="d-lg-none d-block d-flex justify-content-end pt-2">
//           <button
//             onClick={toggleSidebar}
//             className="navbar-toggler shadow-0 d-lg-none d-block"
//             style={{ fontSize: "1.8rem" }}
//           >
//             <i className="fi fi-br-align-justify pt-2"></i>
//           </button>
//         </div>
//         <div className="row g-0 border border-dark rounded-8">
//           <div
//             className="col-lg-3 col-0 p-lg-2 d-lg-block d-none"
//             style={{ borderRight: "1px solid #262626" }}
//           >
//             <div className="d-flex justify-content-center py-2">
//               <img
//                 src={course.thumbnailImage}
//                 className="img-fluid"
//                 alt="course thumbnail"
//               />
//             </div>
//             <h2 className="text-center pb-3 text-primary">
//               {  course.title}
//             </h2>
//             <div className="progress mb-3" style={{ height: "15px" }}>
//               <div
//                 className="progress-bar bg-success"
//                 role="progressbar"
//                 style={{ width: `${progress}%` }}
//                 aria-valuenow={progress}
//                 aria-valuemin="0"
//                 aria-valuemax="100"
//               >
//                 {Math.round(progress)}%
//               </div>
//             </div>
//             {course.topics && course.topics.map((topic, index) => (
//               <div
//                 key={topic._id}
//                 onClick={() => handleTopicClick(index)}
//                 style={{
//                   cursor: "pointer",
//                   textDecoration: selectedTopic === index ? "underline" : "none",
//                 }}
//               >
//                 <p
//                   className="text-capitalize topic-item"
//                   style={{ color: selectedTopic === index ? "#6D39F7" : "" }}
//                 >
//                   <i className="fi fi-ss-book-alt pe-1"></i> {topic.title}
//                 </p>
//                 <hr />
//               </div>
//             ))}
//           </div>

//           {isSidebarOpen && (
//             <div className="d-lg-none d-block">
//               <div className="container-fluid g-0 d-lg-none d-block">
//                 <div
//                   style={{ zIndex: "99" }}
//                   className={`sidebar3 ${isSidebarOpen ? "show" : ""
//                     } d-lg-none d-md-none d-sm-block`}
//                 >
//                   {course.topics.map((topic, index) => (
//                     <div
//                       key={topic._id}
//                       onClick={() => handleTopicClick(index)}
//                       style={{
//                         cursor: "pointer",
//                         textDecoration: selectedTopic === index ? "underline" : "none",
//                         color: selectedTopic === index ? "#FFE164" : "none",
//                       }}
//                     >
//                       <p
//                         className="text-capitalize topic-item"
//                         style={{
//                           color: selectedTopic === index ? "#6D39F7" : "#FFE164",
//                         }}
//                       >
//                         <i className="fi fi-ss-book-alt pe-1"></i> {topic.title}
//                       </p>
//                       <hr />
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           )}

//           <div className="col-lg-7 col-12">
//             {course.topics && course.topics[selectedTopic] && (
//               <div className="p-lg-3 p-2">
//                 <h3 className="text-capitalize text-warning">
//                   {course.topics[selectedTopic].title}
//                 </h3>
//                 {course.topics[selectedTopic].image && (
//                   <div className="my-3 p-2 d-flex align-items-center justify-content-center">
//                     <img
//                       src={course.topics[selectedTopic].image}
//                       alt={course.topics[selectedTopic].title}
//                       style={{ maxHeight: "300px" }}
//                       className="img-fluid"
//                     />
//                   </div>
//                 )}
//                 <div
//                   className="p-2"
//                   dangerouslySetInnerHTML={{
//                     __html: course.topics[selectedTopic].description,
//                   }}
//                 ></div>
//                 <div className="row g-0 pb-4 p-2">
//                   <div className="col-6 text-start">
//                     <div
//                       className="btn text-capitalize"
//                       onClick={goToPreviousTopic}
//                     >
//                       <i className="fi fi-rr-angle-small-left"></i> previous
//                     </div>
//                   </div>
//                   <div className="col-6 text-end">
//                     <div
//                       className="btn text-capitalize"
//                       onClick={goToNextTopic}
//                     >
//                       Next <i className="fi fi-rr-angle-small-right"></i>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="col-lg-2 col-12">
//             <div style={{ position: "fixed", width: "240px" }}>
//               <div className="p-1">
//                 {course.topics &&
//                   course.topics.map((topic, index) => (
//                     <div
//                       key={topic._id}
//                       style={{ cursor: "pointer" }}
//                       onClick={() => setSelectedTopic(index)}
//                     >
//                       {selectedTopic === index &&
//                         topic.headingPoints &&
//                         topic.headingPoints.map((headingPoint, idx) => (
//                           <div key={`${topic._id}-${idx}`}>
//                             <small
//                               className="text-capitalize topic-item"
//                               style={{ fontSize: "0.7rem" }}
//                             >
//                               <i className="fi fi-ss-book-alt pe-1"></i>{" "}
//                               <a href={`#${headingPoint}`}> {headingPoint} </a>
//                             </small>
//                           </div>
//                         ))}
//                     </div>
//                   ))}
//               </div>

//               <div className="card p-2 d-flex justify-content-center align-items-center my-2">
//                 <i className="fi fi-sr-add"></i>
//                 Save Your Notes
//               </div>
//               {blogs &&
//                 blogs.map((blog) => ( 
//                     <SideCard
//                       id = {blog._id}
//                       image={blog.image}
//                       link={`/blog/${blog._id}`}
//                       title={blog.title}
//                       name={blog.name}
//                       formattedDate={blog.formattedDate}
//                     /> 
//                 ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Content;

import React from 'react'

const Content = () => {
  return (
    <div>Content</div>
  )
}

export default Content