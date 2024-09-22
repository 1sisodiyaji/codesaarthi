import React, { useState } from 'react';
import CodeSection from '../Components/Common/CodeSection';
import { Shadow_SM_Buttons } from '../Components/core/Buttons/Buttons';
import DropDown1 from '../Components/core/DropDown/DropDown';
import Modal1 from '../Components/core/Modal/Modal';
import './Docs.css';

const Components = () => {
  const [Buttons, setButtons]=useState('');
  const [DropDown,setDropDown]=useState('');
  const [Modal,setmodals]=useState('');

  const handleButtonsItems=(Arguments)=>{
    setDropDown('');
    setmodals('');
    setButtons(Arguments);
    
  }

// drop down

  const handleDropDownItems=(Arguments)=>{


   setButtons('');
   setmodals('');
    setDropDown(Arguments);
    
  }

  // modal


  const handleModalItems=(Arguments)=>{
    setButtons('');
    setDropDown('');
    setmodals(Arguments);

  }




  return (
    <>
      <div className='w-full h-[3000px] bg-[#2A4A6966]  opacity-80 transition-all duration-700 '>
        {/* Diveded by three part first is  docs,components etc. second is components codes  and third part is add part */}
        <div className='relative top-16  left-36 flex gap-12'>
          <div className='Docs_bar w-48 h-[700px] overflow-y-auto  fixed  bg-[#031526] rounded-lg pt-2 border-t-2  border-r-2 '>
            {/* docs section */}
            <div className='w-full h-fit pt-4  Docs space-y-2 pl-1 pr-1 '>
              <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2 '>Docs</h1>
              <h3 className='text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>install</i></h3>
              <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500  hover:shadow-xl shadow-white'><i>version</i></h3>
            </div>
            {/* Components */}
            <div className='w-full h-fit pt-4  Docs space-y-2  pl-1 pr-1  '>

              <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  '>Components</h1>
              <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2 '>Action</h2>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer  hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 ' onClick={()=>handleButtonsItems('Buttons')}><i>Buttons</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer  hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white ' onClick={()=>handleDropDownItems('DropDown')}><i>DropDown</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 ' onClick={()=>handleModalItems('Modals')}><i>Modal</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Swap</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Toggle</i></h3>


              <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Data Display</h2>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Accordion</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Avatar</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Badge</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Card</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Carousel</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Chat Bubble</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Collapse</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>CountDown</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Diff</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Kbd</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Stat</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Table</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Timeline</i></h3>


              <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Navigations</h2>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Breadcrumbs</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Bottom</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Link</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Menu</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Navbar</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Steps</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Tab</i></h3>


              <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>FeedBack</h2>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Alert</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Loading</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>progress</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>R Progress</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Skeletion</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Toast</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Tooltip</i></h3>



              <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Data Input</h2>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>CheckBox</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>FileInput</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Radio</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Range</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Rating</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Select</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>TextInput</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>TextArea</i></h3>


              <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Layout</h2>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Art Board</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Divider</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Drawer</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Footer</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Hero</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Indicator</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Join</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Mask</i></h3>
              <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Stack</i></h3>


              <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Mock Up</h2>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Browser</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Code</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-orange-500 rounded-lg transition-all duration-500 hover:shadow-xl shadow-orange-500 '><i>Phone</i></h3>
              <h3 className='text_bar text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer hover:pl-12 hover:border-l-4 hover:border-r-4 border-white rounded-lg transition-all duration-500 hover:shadow-xl shadow-white '><i>Window</i></h3>







            </div>

            {/* playground  github etc... */}
            <div className='pt-12'>
              <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>PlayGround</h1>
              <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>Github</h1>
              <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>Developers</h1>
              <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>Support Codesaarthi UI</h1>
            </div>



          </div>
          <div className='Docs_bar w-1/2 h-[700px]  rounded-lg border-b-2 border-l-2  overflow-y-auto fixed left-[400px]  bg-transparent  transition-all duration-700'>
                   <h1 className='text-center  pt-2 pb-2 font-extrabold text-3xl text-cyan-800 underline'>Components</h1>
            {/* components Name */}
            <div className='w-full  text-2xl font-bold font-mono text-cyan-800 pt-8 pl-8  z-10'>

            {Buttons &&( <h1 className=' w-28 text-center shadow-inner shadow-black  bg-slate-500 opacity-100  rounded-tl-md rounded-bl-md'><span>Buttons</span></h1>)} 
            {DropDown &&( <h1 className=' w-28 text-center shadow-inner shadow-black  bg-slate-500 opacity-100  rounded-tl-md rounded-bl-md'><span>DropDown</span></h1>)} 
            {Modal &&( <h1 className=' w-28 text-center shadow-inner shadow-black  bg-slate-500 opacity-100  rounded-tl-md rounded-bl-md'><span>Modal</span></h1>)} 

            </div>
            {/* Commponents type section */}
            <div className='  w-full  h-10 '>
              {Buttons && (<div className='flex hw-full h-10 overflow-x-auto pl-3 pt-1 pb-1 text-cyan-700 text-2xl space-x-3 font-mono font-extrabold  bg-[#031526] mt-4 transition-all duration-700 '>
                     <Shadow_SM_Buttons/>
              </div>)}

              {DropDown && (<div className='flex hw-full h-10 overflow-x-auto pl-3 pr-3 pt-1 pb-1 text-cyan-700 text-2xl space-x-3 font-mono font-extrabold  bg-[#031526] mt-4 transition-all duration-700 '>
                     <DropDown1/>
              </div>)}

              {Modal && (<div className='flex hw-full h-10 overflow-x-auto pl-3 pr-3 pt-1 pb-1 text-cyan-700 text-2xl space-x-3 font-mono font-extrabold  bg-[#031526] mt-4 transition-all duration-700 '>
                    <Modal1/>
              </div>)}
             
            </div>

            {/*  COde section */}
            <CodeSection />

          </div>
          <div className='Docs_bar w-48 h-[700px] rounded-lg border-t-2 border-r-2 overflow-y-auto fixed left-[1230px]  bg-[#031526] pb-36'>


          </div>

        </div>

      </div>
    </>
  )
}

export default Components