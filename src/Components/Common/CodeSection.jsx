import React from 'react'

function CodeSection() {
  return (
   <>
   <div className='relative top-16 mt-4 p-1 left-24 w-3/4 h-[307px] bg-white shadow-inner shadow-black rounded-sm  transition-all duration-700'>
   <div className=' w-full h-[300px] bg-black text-white  pt-4 pb-4 pl-6 pr-4 rounded-sm  shadow-md shadow-orange-500 '>
    <div className='flex justify-start gap-2 relative -top-2 -left-2'>
        <div className='bg-red-700 w-4 h-4 rounded-full shadow-inner shadow-black'></div>
        <div className='bg-yellow-500 w-4 h-4 rounded-full shadow-inner shadow-black'></div>
        <div className='bg-green-600 w-4 h-4 rounded-full shadow-inner shadow-black'></div>
        <div className='relative left-[440px]'>
            <div className='bg-slate-200 cursor-pointer w-4 h-4 text-md  pl-1 rounded-full shadow-inner shadow-black overflow-hidden '><span className='relative  -top-1 text-orange-500 font-bold'>c</span></div>
        </div>
    </div>

    {/* Code is here */}
    <div className='border h-60 mr-2 bg-slate-400 text-black font-bold text-xl shadow-inner shadow-black p-1 overflow-x-auto overflow-y-auto'>
        <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque neque expedita consectetur, non sint error porro, saepe quo, voluptates nostrum vitae voluptas et inventore. Deleniti provident dolorem corporis autem dolor rem saepe laborum delectus eaque ea, neque quo. Cumque, alias asperiores odit fuga minus at unde, voluptatem enim, dolore nihil ad soluta accusantium harum ipsa eaque iste. Ipsam assumenda necessitatibus sint voluptates facilis voluptate eaque perferendis reprehenderit iste alias, adipisci doloribus illum ab! Molestias suscipit recusandae eaque sapiente, fugit omnis, modi odit nemo quam, tenetur sunt corrupti animi ipsum in! Consequatur sequi reiciendis ipsum nesciunt, alias magni enim nostrum possimus praesentium, expedita rerum deleniti ad veniam incidunt soluta perferendis aliquid earum itaque nisi debitis doloremque iure aperiam. Nulla temporibus perspiciatis unde beatae omnis dolor ut quidem cupiditate asperiores adipisci voluptates voluptatibus enim obcaecati sed mollitia, excepturi debitis quod error aut? Ab sapiente est ea. Temporibus harum suscipit debitis doloribus ipsam obcaecati similique. Aut impedit voluptas esse laboriosam fuga sunt inventore, exercitationem, commodi qui unde quod asperiores! Inventore placeat maxime maiores eius asperiores exercitationem doloribus facere architecto consequatur fuga tempore sapiente nihil porro, cum dignissimos? Corporis illo velit aut reprehenderit sequi natus necessitatibus magni eaque officia veniam obcaecati commodi cupiditate, magnam eius sapiente voluptatem. Sequi impedit ab, eum amet sint inventore error rerum exercitationem perferendis, numquam voluptatum nostrum. Incidunt mollitia ipsam unde impedit, ex nulla! Reiciendis nesciunt provident adipisci itaque at. Atque sit veniam quisquam vel tempora modi fuga excepturi quis a unde doloribus, voluptates omnis explicabo impedit expedita magni, delectus soluta id voluptatum amet assumenda molestiae beatae esse? Animi praesentium voluptas, sed quasi unde cum, tenetur optio, aliquid officia aperiam fuga cumque dolor similique ab. Eligendi omnis atque incidunt dolores esse dolore hic officia quia eius quo, inventore similique blanditiis, vel libero commodi repudiandae consequuntur nisi odio magni quaerat nesciunt!
        </span>
   </div>
   </div>
   </div>
   <div className=' transition-all duration-300 w-28 border-b-black h-8  bg-[#262626] rounded-t-full relative top-[-275px] left-24 border-r-4 border-l-4  border-r-cyan-400 border-l-cyan-400 border-2 text-[#FFFFFF] text-center pt-1 shadow-inner shadow-black cursor-pointer active:shadow-xl active:bg-black '>Preview</div>
   <div className='transition-all duration-300 w-28 border-b-black h-8  bg-[#262626] rounded-t-full relative top-[-307px] left-52 border-r-4 border-l-4  border-r-cyan-400 border-l-cyan-400 border-2 text-[#FFFFFF] text-center pt-1 shadow-inner shadow-black cursor-pointer active:shadow-xl active:bg-black '>Bootstrap</div>
   <div className='transition-all duration-300 w-28 border-b-black h-8  bg-[#262626] rounded-t-full relative top-[-339px] left-[320px] border-r-4 border-l-4  border-r-cyan-400 border-l-cyan-400 border-2 text-[#FFFFFF] text-center pt-1 shadow-inner shadow-black cursor-pointer active:shadow-xl active:bg-black '>Tailwind</div>
   <div className='transition-all duration-300 w-28 border-b-black h-8  bg-[#262626] rounded-t-full relative top-[-371px] left-[431px] border-r-4 border-l-4  border-r-cyan-400 border-l-cyan-400 border-2 text-[#FFFFFF] text-center pt-1 shadow-inner shadow-black cursor-pointer active:shadow-xl active:bg-black '>Playground</div>
{/*  buttons  */}
 <div className='flex justify-between pl-12 pr-12 relative -top-12'>
 <div className='w-28 h-8 text-xl  font-bold text-white cursor-pointer active:shadow-xl  rounded-full shadow-inner shadow-black bg-[#262626] border-r-cyan-600 border-r-4 border-l-4 border-l-cyan-600 text-center pt-1 '>Back</div>
 <div className='w-28 h-8 text-xl font-bold text-white cursor-pointer active:shadow-xl  rounded-full shadow-inner shadow-black bg-[#262626] border-r-cyan-600 border-r-4 border-l-4 border-l-cyan-600 text-center pt-1 '>Next</div>
 </div>
   
   </>
  )
}

export default CodeSection