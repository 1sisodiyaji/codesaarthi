import React from 'react';

const Components = () => {
  return (
   <>
   <div className='w-full h-[1800px] bg-[#212121]'>
    {/* Diveded by three part first is  docs,components etc. second is components codes  and third part is add part */}
    <div className='relative top-16  left-36 flex gap-12'>
      <div className='w-48 h-auto shadow-xl shadow-black border-1 border-black bg-[#312F2F] '>
       {/* docs section */}
        <div className='w-full h-fit pt-4  Docs -space-y-2 '>
          <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2 '>Docs</h1>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer'><i>install</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer '><i>version</i></h3>
        </div>
        {/* Components */}
        <div className='w-full h-fit pt-4  Docs -space-y-2 '>

        <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2 '>Components</h1>
        <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2 '>Action</h2>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer '><i>Buttons</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer '><i>DropDown</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer'><i>Modal</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer'><i>Swap</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8  hover:cursor-pointer'><i>Toggle</i></h3>


            <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Data Display</h2>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Accordion</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Avatar</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Badge</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Card</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Carousel</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Chat Bubble</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Collapse</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>CountDown</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Diff</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Kbd</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Stat</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Table</i></h3> 
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Timeline</i></h3>


            <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Navigations</h2>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Breadcrumbs</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Bottom Navigation</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Link</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Menu</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Navbar</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Steps</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Tab</i></h3>


            <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>FeedBack</h2>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Alert</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Loading</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>progress</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Radial Progress</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Skeletion</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Toast</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Tooltip</i></h3>



            <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Data Input</h2>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>CheckBox</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>FileInput</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Radio</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Range</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Rating</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Select</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>TextInput</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>TextArea</i></h3>


            <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Layout</h2>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Art Board</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Divider</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Drawer</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Footer</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Hero</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Indicator</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Join</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Mask</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Stack</i></h3>


            <h2 className='text-md font-bold font-mono text-slate-500 pl-6 pb-2  pt-4'>Mock Up</h2>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Browser</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Code</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Phone</i></h3>
            <h3 className='text-lg font-mono font-medium text-slate-300 pl-8 hover:cursor-pointer'><i>Window</i></h3>
            



           
           

        </div>

        {/* playground  github etc... */}
        <div className='pt-12'>
        <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>PlayGround</h1>
        <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>Github</h1>
        <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>Developers</h1>
        <h1 className='text-xl font-bold font-mono text-slate-200 pl-5 pb-2  hover:cursor-pointer'>Support Codesaarthi UI</h1>
        </div>



      </div>
      <div className='w-1/2 min-h-screen shadow-xl shadow-black border-1 border-black bg-[#312F2F]'></div>
      <div className='w-48 min-h-screen shadow-xl shadow-black border-1 border-black bg-[#312F2F]'></div>

    </div>
   
   </div>
   </>
  )
}

export default Components