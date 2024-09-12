import React from 'react';

function Navbar() {
    return (
        <>
            {/* navbar */}
            <div className='w-full h-14 fixed border-b-2  bg-bgcolor  shadow-lg shadow-slate-400  '>
                {/* Navbar 3 Items */}
                <div className='flex justify-evenly  w-full h-full  '>
                    {/* Logo and some options */}
                    <div className='w-[30%] h-full text-center  font-medium text-textcolor pt-3 flex  '>
                        <div className='    text-textcolor hover:cursor-pointer'> <h1 className='text-xl font-bold flex hover:cursor-pointer '>Code <span className='text-sm mt-3 text-white font-mono'>Saarthi</span></h1></div>

                        <div className='w-full h-full  flex  justify-evenly gap-4 '>
                            <h5 className='ml-8 hover:cursor-pointer'>Docs</h5>
                            <h5 className='hover:cursor-pointer'>Examples</h5>
                            <h5 className='hover:cursor-pointer'>Icons</h5>
                            <h5 className='hover:cursor-pointer'>Themes</h5>
                            <h5 className='hover:cursor-pointer'>Blog</h5>
                        </div>
                    </div>
                    {/* searchbar */}
                    <div className='w-[25%] h-10 mt-2  font-medium text-textcolor border-2 rounded-lg shadow-md shadow-slate-400'>
                        <div className='w-full h-full  flex'>
                            <input type="text" className='w-full rounded-md pl-4 text-xl   bg-transparent focus:outline-none ' placeholder='Search' />
                            {/* <span><i className="fi fi-rs-search text-2xl"></i></span>
                <span className='text-md ml-2 relative -top-1'>Search</span>
                <span><input type="text"  className='w-[250px] h-full ml-4'/></span> */}
                        </div>

                    </div>
                    {/* linkss */}
                    <div className='w-[25%] h-full text-center font-mono font-medium text-textcolor  '>
                        <div className='w-full h-full  flex  justify-evenly  '>
                            <div className='h-full w-20 flex gap-8 ml-4 border-r pt-4'>
                            <h5><i class="fi fi-brands-github"></i></h5>
                            <h5><i className="fi fi-brands-twitter "></i></h5>
                            </div>
                           
                            <div className='h-full w-20 border-r pt-2 text-xl pr-8'> <h5>v1.0</h5></div>
                            {/* dark mode button */}
                           <div className='h-6 w-12 font-bold  text-xl pr-8 border-2 rounded-full mt-4'>
                            
                            <div className='w-5 h-5 border-2 rounded-full bg-white hover:transform duration-75 active:translate-x-6  active:bg-textcolor'></div>
                         
                           </div>
                            

                        </div>


                    </div>
                </div>

            </div>
        </>
    );

}

export default Navbar