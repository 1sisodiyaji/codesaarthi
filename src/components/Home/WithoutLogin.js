import React from 'react'
import { Link } from 'react-router-dom'


const WithoutLogin = () => {
  return (
<div className='max-w-7xl m-auto'>
          <div className="flex flex-wrap  w-full lg:py-6 py-2">
            <div className="lg:w-1/2 pr-4 pl-4 w-full flex justify-center items-center">
              <div className="space-y-2">
                <h1 className="text-start md:text-4xl text-3xl">
                  Start Learning with <br />
                  <span style={{ color: "#703BF7" }}>Codesaarthi</span> <br />
                  Break Language Barriers for <br />
                  Coding
                </h1>
                <p style={{ color: "#999999" }} className='text-2xl'>
                  Empowering Easy Learning and Code Mastery Across <br />{" "}
                  Languages
                </p>
                <Link to="/signup">
                                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 mt-3">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Start Your Journey <i className="fi fi-rr-arrow-right"></i>
                </span>
                </button> 
                </Link>


              </div>
            </div>
            <div className="lg:w-1/2 pr-4 pl-4 w-full">
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994849/HeroImage_w0lwv2.png"
                className="max-w-full h-auto"
                loading="lazy"
                alt="laptop view "
              />
            </div>
          </div>

          <div className="flex flex-wrap  lg:py-12">
            <div className="lg:w-1/3 pr-4 pl-4 col-0 lg:block hidden">
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                className="max-w-full h-auto"
                style={{ marginTop: "-32vh", marginLeft: "22vw" }}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994938/Rectangle2_ckx3bx.png"
                className="max-w-full h-auto"
                style={{ marginTop: "12vh", marginLeft: "4vw" }}
                alt=""
              />
            </div>

            <div className="lg:w-2/5 pr-4 pl-4 w-full text-center  self-end">
              <h1 className="text-2xl">
                Discover Our Tailored Projects
              </h1>
              <p className=''
              >
                Explore Custom-Made Solutions Designed Just for You!
              </p>
            </div>
            <div className="lg:w-1/4 pr-4 pl-4 col-0 text-end lg:block hidden">
              <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994988/Rectangle3_pgla2x.png" className="max-w-full h-auto" alt="" />
            </div>
          </div>

          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap ">
              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded break-words border bg-gray-200 dark:bg-gray-800 border-1 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/Projects/web-development">
                    <div className="text-end">
                      <i
                        className="fi fi-rs-arrow-up-right text-gray-400"
                      ></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995043/clone1_piecml.png"
                      className="max-w-full h-20" alt="clone" />
                  </div>
                  <div className="text-center p-6">
                    <h5 className="mb-3 text-xl">
                      Clone projects
                    </h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/Projects/React-based-project">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995214/React1_ievzdg.png"
                      className="max-w-full h-20"
                      alt="react"
                    />
                  </div>
                  <div className="text-center p-6">
                    <h5 className="mb-3 text-xl">React Js projects</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 p-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/Projects/phpProjects">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995293/php1_vgzkyn.png"
                      className="max-w-full h-20"
                      alt="php"
                    />
                  </div>
                  <div className="text-center p-6">
                    <h5 className="mb-3 text-xl">PHP projects</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 p-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/Projects/java-Projects">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995337/java1_qikuqa.png"
                      className="max-w-full h-20"
                      alt="java"
                    />
                  </div>
                  <div className="text-center p-6">
                    <h5 className="mb-3 text-xl">Java projects</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 p-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/Projects/HtmlProject">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995414/html1_w62ewn.png"
                      className="max-w-full h-20"
                      alt="html"
                    />
                  </div>
                  <div className="text-center p-6">
                    <h5 className="mb-3 text-xl">HTML projects</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 p-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/Projects">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995414/htmlcssjs1_l4v56a.png"
                      className="max-w-full h-20"
                      alt="html css js"
                    />
                  </div>
                  <div className="text-center p-6">
                    <h5 className="mb-3 text-xl">HTML, CSS, JS projects</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap  g-0 lg:py-12">
            <div className="lg:w-1/3 pr-4 pl-4 col-0 lg:block hidden">
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                className="max-w-full h-auto"
                style={{ marginTop: "7vh", marginLeft: "20vw" }}
                alt="designs"
              />
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994938/Rectangle2_ckx3bx.png"
                className="max-w-full h-auto"
                style={{ marginTop: "7vh", marginLeft: "2vw" }}
                alt="designs"
              />
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 w-full self-end">
              <h2 className="text-center text-2xl">
                Premium Notes Tailored for You
              </h2>
              <p className="text-center" style={{ color: "#999999" }}>
                Discover Top-Notch Study Materials Crafted with Excellence
              </p>
            </div>
            <div className="lg:w-1/3 pr-4 pl-4 lg:block hidden">
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                className="max-w-full h-auto"
                style={{ marginTop: "-47vh", marginLeft: "-2vw" }}
                alt="Rectangle1.png "
              />
              <img
                src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720994914/Rectangle1_qbln76.png"
                className="max-w-full h-auto "
                style={{
                  marginTop: "20vh",
                  marginLeft: "15vw",
                }}
                alt="Rectangle1.png "
              />
            </div>
          </div>

          <div className="container mx-auto sm:px-4">
            <div className="flex flex-wrap lg:py-12 mx-auto">
              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/theory/Os-Content">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995677/Text_mwaw1m.png"
                      className="max-w-full h-20"
                      alt="os"
                    />
                  </div>
                  <div className="text-center pt-6">
                    <h5 className="mb-3 text-2xl">Operating System Notes</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/theory/React-Content">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995214/React1_ievzdg.png"
                      className="max-w-full h-20"
                      alt="react"
                    />
                  </div>
                  <div className="text-center pt-6">
                    <h5 className="mb-3 text-2xl">React Notes</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/theory/array">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995674/javaNotes_lqenmq.png"
                      className="max-w-full"
                      alt="java"
                      style={{ height: "12vh" }}
                    />
                  </div>
                  <div className="text-center pt-6">
                    <h5 className="mb-3 text-2xl">Arrays in short</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/theory/basic-Dbms">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995673/dbms1_exxs9f.png"
                      className="max-w-full"
                      alt="dbms"
                      style={{ height: "12vh" }}
                    />
                  </div>
                  <div className="text-center pt-6">
                    <h5 className="mb-3 text-2xl">DBMS Notes</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/theory/array">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995674/javaNotes_lqenmq.png"
                      className="max-w-full"
                      alt="java"
                      style={{ height: "12vh" }}
                    />
                  </div>
                  <div className="text-center pt-6">
                    <h5 className="mb-3 text-2xl">Arrays in short</h5>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3 pr-4 pl-4 w-full my-2">
                <div className="relative flex flex-col min-w-0 rounded border bg-gray-200 dark:bg-gray-800 border-gray-300 dark:border-gray-700 p-6">
                  <Link to="/theory/basic-Dbms">
                    <div className="text-right">
                      <i className="fi fi-rs-arrow-up-right text-gray-400"></i>
                    </div>
                  </Link>
                  <div className="mx-auto">
                    <img
                      src="https://res.cloudinary.com/ducw7orvn/image/upload/v1720995673/dbms1_exxs9f.png"
                      className="max-w-full"
                      alt="dbms"
                      style={{ height: "12vh" }}
                    />
                  </div>
                  <div className="text-center pt-6">
                    <h5 className="mb-3 text-2xl">DBMS Notes</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div> 
  )
}

export default WithoutLogin