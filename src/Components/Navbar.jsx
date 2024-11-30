import React, { useEffect, useState } from "react";

function Navbar() {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        const savedDarkMode = localStorage.getItem("darkMode") === "true";
        setDarkMode(savedDarkMode);
        if (savedDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("darkMode", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <>
            <div className='w-full sticky top-0 left-0  z-10  h-14 bg-gray-300 dark:bg-Navbgcolor'>
                {/* Navbar 3 Items */}
                <div className='flex justify-evenly items-center h-full'>
                    {/* Logo and some options */}
                    <div className='h-full text-center  font-medium text-textcolor pt-3 flex'>
                        <div className='    text-textcolor hover:cursor-pointer'> <h1 className='text-xl font-bold flex hover:cursor-pointer '>Code <span className='text-sm mt-3 text-white font-mono'>Saarthi</span></h1></div>

                        <div className='w-full h-full  flex  justify-evenly gap-4 '>
                            <h5 className='ml-8 hover:cursor-pointer'>Docs</h5>
                            <h5 className='hover:cursor-pointer'>Components</h5>
                            <h5 className='hover:cursor-pointer'>Icons</h5>
                            <h5 className='hover:cursor-pointer'>Themes</h5>
                            <h5 className='hover:cursor-pointer'>Blog</h5>
                        </div>
                    </div>

                    {/* searchbar */}
                    <div className="space-x-2 flex">
                    <div className='h-10   font-medium text-textcolor border-2 rounded-lg shadow-md shadow-slate-400'>
                        <div className='w-full h-full  flex'>
                            <input type="text" className='w-full rounded-md pl-4 text-xl   bg-transparent focus:outline-none ' placeholder='Search' />
                            {/* <span><i className="fi fi-rs-search text-2xl"></i></span>
                <span className='text-md ml-2 relative -top-1'>Search</span>
                <span><input type="text"  className='w-[250px] h-full ml-4'/></span> */}
                        </div>

                        </div>
                        {/* linkss */}
                        <div className=' h-full text-center font-mono font-medium text-textcolor'>
                            <div className='w-full h-full  flex  justify-evenly items-center space-x-2'>
                                <div className='h-full flex gap-8 ml-4 border-r pt-4 pr-3'>
                                    <i className="fi fi-brands-github"></i>
                                    <i className="fi fi-brands-linkedin"></i>
                                    <i className="fi fi-brands-twitter-alt-square"></i>
                                </div>

                                <select name="Version" id="version" className='w-32 bg-transparent'>
                                    <option value="v1" className='h-full w-12 border-r pt-2 text-xl '>V1.0</option>
                                </select>

                                <div
                                    className='h-6 w-12 font-bold text-xl pr-8 border-2 rounded-full  cursor-pointer'
                                    onClick={toggleDarkMode}
                                >
                                    <div
                                        className={`w-5 h-5 border-2 rounded-full bg-white transform transition-transform duration-300  ${darkMode ? 'translate-x-6 bg-yellow-400' : ''
                                            }`}
                                    ></div>
                                </div>

                                <div className='hover:cursor-pointer'>
                                    Store
                                </div>

                            </div>
                        </div>

                  
                    </div>
                </div>

            </div>
        </>
    );

}

export default Navbar