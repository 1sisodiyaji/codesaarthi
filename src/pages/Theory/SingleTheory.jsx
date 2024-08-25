import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet";
import config from "../../helper/config";
import Loading from "../../components/Loading";
import TimeConverter from "../../helper/TimeConverter";
import { SmallCard } from "../../components/SmallCard";

const SingleTheory = () => {
  const { slug } = useParams();
  const [course, setCourse] = useState({});
  const [blogs, setBlogs] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem("topicProgress");
    return storedCount ? JSON.parse(storedCount) : 1;
  });

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const response = await axios.get(`${config.BASE_URL}/Admin/getRoadmap/${slug}`); 
        setCourse(response.data);
        console.log(response.data.topics);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const response = await axios.post(`${config.BASE_URL}/article/getArticleData`);
        const formattedBlogs = response.data.map((blog) => ({
          ...blog,
          formattedDate: <TimeConverter date={blog.date} />
        }));
        const sortedBlogs = formattedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
        setBlogs(sortedBlogs.slice(0, 5));
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
    fetchCourse();
  }, [slug]);

  useEffect(() => {
    if (course.topics && course.topics[selectedTopic]) {
      const topicTitle = course.topics[selectedTopic].headline;
      document.title = topicTitle ? `${topicTitle} | Codesaarthi` : "Codesaarthi";
      const metaOgTitle = document.querySelector('meta[property="og:title"]');
      if (metaOgTitle) {
        metaOgTitle.setAttribute("content", document.title);
      }
    }
  }, [selectedTopic, course]);

  useEffect(() => {
    localStorage.setItem("topicProgress", JSON.stringify(count));
  }, [count]);

  const progress = course.topics ? Math.min((count / course.topics.length) * 100, 100) : 0;

  const handleTopicClick = (index) => {
    setSelectedTopic(index);
    console.log(selectedTopic)
  };

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const goToPreviousTopic = () => {
    if (selectedTopic > 0) {
      setSelectedTopic(selectedTopic - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goToNextTopic = () => {
    if (course.topics && selectedTopic < course.topics.length - 1) {
      setSelectedTopic(selectedTopic + 1);
      setCount((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  if (!course) {
    return <Loading message="Fetching Course Details" />;
  }

  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="Mongo DB, learn Mongo DB from scratch, ACID property, replication, sharding, CRUD operations, indexing, JSON, BSON"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://codesaarthi.com/theory/${slug}`} />
        <meta name="description" content={course.description} />
        <title>
          {course.topics && course.topics[selectedTopic]
            ? `${course.topics[selectedTopic].headline} | Codesaarthi`
            : "Codesaarthi"}
        </title>
        <meta
          property="og:title"
          content={
            course.topics && course.topics[selectedTopic]
              ? course.topics[selectedTopic].headline
              : "Codesaarthi"
          }
        />
        <meta property="og:description" content={course.description} />
        <meta property="og:image" content={course.thumbnail} />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/theory/${slug}`}
        />
        <meta property="og:type" content="Education-Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/img/favicon.ico"
          sizes="32x32"
        />
      </Helmet>

      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-end lg:hidden mb-2">
          <button
            onClick={toggleSidebar}
            className="text-xl"
          >
            <i className="fi fi-br-align-justify"></i>
          </button>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap border border-gray-800 rounded-lg">
          <div
            className="lg:w-1/4 w-full lg:pr-2 lg:border-r lg:border-gray-800 lg:py-2 lg:block hidden"
          >
            <div className="flex justify-center mb-4">
              <img
                src={course.thumbnail}
                className="w-full max-w-xs"
                alt="course thumbnail"
              />
            </div>
            <h2 className="text-center text-blue-500 text-xl font-bold mb-4">{course.title}</h2>
            <div className="relative mb-4">
              <div className="h-4 bg-gray-200 rounded">
                <div
                  className="bg-green-500 h-full rounded"
                  style={{ width: `${progress}%` }}
                >
                  {Math.round(progress)}%
                </div>
              </div>
            </div>
            {course.topics && course.topics.map((topic, index) => (
              <div
                key={topic._id}
                onClick={() => handleTopicClick(index)}
                className={`cursor-pointer ${selectedTopic === index ? 'underline text-blue-600' : ''}`}
              >
                <p className="flex items-center text-lg mb-1">
                  <i className="fi fi-ss-book-alt mr-2"></i> {topic.headline}
                </p>
                <hr className="border-gray-300" />
              </div>
            ))}
          </div>

          {isSidebarOpen && (
            <div className="lg:hidden fixed inset-0 bg-white z-50 overflow-y-auto">
              <div className="p-4">
                {course.topics.map((topic, index) => (
                  <div
                    key={topic._id}
                    onClick={() => handleTopicClick(index)}
                    className={`cursor-pointer ${selectedTopic === index ? 'underline text-yellow-300' : 'text-yellow-300'}`}
                  >
                    <p className="flex items-center text-lg mb-1">
                      <i className="fi fi-ss-book-alt mr-2"></i> {topic.headline}
                    </p>
                    <hr className="border-gray-300" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="lg:w-2/3 w-full px-4 py-6"> 
            {course.topics && course.topics[selectedTopic] && (
              <div>
                <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                  {course.topics[selectedTopic].headline}
                </h3> 
                {course.topics[selectedTopic].image && (
                  <div className="my-4 flex justify-center">
                    <img
                      src={course.topics[selectedTopic].image}
                      alt={course.topics[selectedTopic].headline}
                      className="max-h-72 w-auto"
                    />
                  </div>
                )}
                <div
                  className="mb-6"
                  dangerouslySetInnerHTML={{
                    __html: course.topics[selectedTopic].description,
                  }}
                ></div>
                <div className="flex justify-between">
                  <button
                    className="btn bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
                    onClick={goToPreviousTopic}
                    disabled={selectedTopic === 0}
                  >
                    <i className="fi fi-rr-angle-small-left mr-2"></i> Previous
                  </button>
                  <button
                    className="btn bg-blue-500 text-white py-2 px-4 rounded disabled:opacity-50"
                    onClick={goToNextTopic}
                    disabled={selectedTopic === (course.topics.length - 1)}
                  >
                    Next <i className="fi fi-rr-angle-small-right ml-2"></i>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="lg:w-1/4 w-full lg:pl-2">
            <div className="sticky top-0 w-full">
              <div className="p-2">
              {course.topics &&
                course.topics.map((topic, index) => (
                  <div
                    key={topic._id}
                    className="cursor-pointer"
                    onClick={() => setSelectedTopic(index)}
                  >
                    {selectedTopic === index &&
                      topic.points &&
                      topic.points.map((headingPoint, idx) => (
                        <div key={`${topic._id}-${idx}`} className="mb-2">
                          <small className="text-sm text-blue-600">
                            <i className="fi fi-ss-book-alt mr-2"></i>
                            <a href={`#${headingPoint}`}>{headingPoint}</a>
                          </small>
                        </div>
                      ))}
                  </div>
                ))}
              </div>

              <div className="bg-gray-100 p-4 rounded shadow mt-4">
                <i className="fi fi-sr-add mr-2"></i> Save Your Notes
              </div>

              {blogs &&
                blogs.map((blog) => (
                  <SmallCard
                    key={blog._id}
                    id={blog._id}
                    image={blog.image}
                    link={`/blog/${blog._id}`}
                    title={blog.title}
                    name={blog.name}
                    formattedDate={blog.formattedDate}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTheory;

