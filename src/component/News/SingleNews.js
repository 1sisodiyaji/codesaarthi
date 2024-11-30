import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import config from "../../config/config";
import axios from "axios";
import { Helmet } from "react-helmet";

const SingleNews = () => {
  const { slug } = useParams();
  const [newsItem, setNewsItem] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      try {
        const response = await axios.get(
          `${config.BASE_URL}/article/getNewsById/${slug}`
        );
        setNewsItem(response.data[0]);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewsItem();
  }, [slug]);

  async function fetchNews() {
    const response = await axios.get(
      `${config.BASE_URL}/article/getLatestNews`
    );
    setNews(response.data);
  }
  useEffect(() => {
    fetchNews();
  }, [slug]);

  if (loading) {
    return<div className="vh-100 text-warning d-flex justify-content-center align-items-center">
          <div className="card" aria-hidden="true" style={{ width: "350px" }}>
            <div className="text-center">
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1721031578/loader_bhnpfb.gif"
                style={{ height: "125px", width: "115px" }}
                className="card-img-top"
                alt="..."
              />
            </div>
            <div className="card-body">
              <h5 className="card-title placeholder-glow">
                <span className="placeholder col-6"></span>
              </h5>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-4"></span>
                <span className="placeholder col-6"></span>
                <span className="placeholder col-8"></span>
              </p>
              <a href="/"
                className="btn btn-secondary disabled placeholder col-6"
                aria-disabled="true"
              > Getting Blogs For you</a>
            </div>
          </div>
    </div>
  }
  
  if (error) {
    return <div>Error fetching data: {error.message}</div>;
  }

  if (!newsItem) {
    return <div>No data found</div>;
  }
  return (
    <>
    <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="CodeSaarthi" content="Codesaarthi" />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href={`https://codesaarthi.com/news/${newsItem._id}`}
        />
        <meta name="description" content={newsItem.description} />
        <title>{newsItem.title}</title>
        <meta property="og:title" content={newsItem.title} />
        <meta property="og:description" content={newsItem.description} />
        <meta property="og:image" content={newsItem.urlToImage} />
        <meta
          property="og:url"
          content={`https://codesaarthi.com/blog/${newsItem._id}`}
        />
        <meta property="og:type" content="Education-Website" />
        <link rel="icon" type="image/png" href={newsItem.urlToImage} sizes="32x32" />
      </Helmet>
      <div className="container">
        <div
          className="container-fluid design py-4 "
          style={{ minHeight: "100vh" }}
        >
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="rounded-4 shadow-lg">
                <h4 className="p-1 text-decoration-underline">
                  {newsItem.title}
                </h4>

                <div className="row my-2">
                  <div className="col-6">
                    <small className="ps-2">Author : {newsItem.author}</small>
                  </div>
                  <div className="col-6 text-end">
                    <Link to={newsItem.url} target="blank">
                      <button className="btn btn-sm rounded-8 text-capitalize">
                        Read More <i className="fi fi-rr-share-square ps-1"></i>
                      </button>
                    </Link>
                  </div>
                </div>

                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={
                      newsItem.urlToImage
                        ? newsItem.urlToImage
                        : "https://codesaarthi.com/img/logo1.jpg"
                    }
                    alt={newsItem.title}
                    loading="lazy"
                    className="img-fluid imageHeight mb-3"
                  />
                </div>
                <div className="p-2">
                  <p>{newsItem.description}</p>
                  <div dangerouslySetInnerHTML={{ __html: newsItem.content }} />
                </div>
                <hr />

                <div className="row p-2">
                  <div className="col-6 text-start">
                    <small>
                      Posted by:{" "}
                      {newsItem.source ? newsItem.source.name : "Anonymous"}
                    </small>
                  </div>
                  <div className="col-6 text-end">
                    <small>
                      {new Date(newsItem.publishedAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-12 my-2">
              <p className="text-center">Read More News</p>
              <hr />
              {news.map((news) => (
                <div className=" rounded-6 mb-2 shadow-4" key={news._id}>
                  <div className="row g-0 p-2">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                      <img
                        src={  news.urlToImage ? news.urlToImage :   "https://codesaarthi.com/img/logo.jpg"}
                        alt="Author"
                        style={{ width: "55px", height: "55px" }}
                        className="img-fluid rounded-circle"
                      />
                    </div>
                    <div className="col-9">
                      <div className="card-body">
                        <Link to={`/news/${news.slug}`}>
                          {" "}
                          <small className="iconColor">{news.title}</small>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <small
                      className="text-muted ps-2"
                      style={{ fontSize: "0.6rem" }}
                    >
                      By {news.source.name} |
                      {new Date(news.publishedAt).toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "numeric",
                        minute: "numeric",
                        hour12: true,
                      })}
                    </small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleNews;
