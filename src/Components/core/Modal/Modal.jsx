import React, { useState } from 'react'

function Modal() {
    const [modalopen,setModalVisible]=useState(false);
    const handleModalOpen=()=>{
        setModalVisible(!modalopen);
    }
    const handlcloseModal=()=>{
        setModalVisible(!modalopen);

    }
  return (
    <>
    <div className='flex gap-3 '>
    <div>
      <button  className=" w-20 h-8 relative -top-1 bg-orange-500 text-sm text-white rounded-sm" onClick={handleModalOpen}>Modal1</button>
      
     
       {modalopen && ( <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-black  rounded-lg shadow-inner shadow-black w-96 h-16 ring-2 ring-white pl-2">
            <span className='text-white text-xl'>Lorem ipsum dolor sit amet.</span>
          
            <button onClick={handlcloseModal} className=" relative  top-6 text-center text-sm pl-1 pr-1 h-6 bg-green-500 text-white rounded-lg">Close</button>
          </div>
       
        </div>
         )}
   
    </div>

    {/* modal2 */}


    <div>
      <button  className=" w-20 h-8 relative -top-1 bg-white text-sm text-blue-500 rounded-sm" onClick={handleModalOpen}>Modal2</button>
      
     
       {modalopen && ( <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20">
          <div className="bg-black  rounded-full shadow-inner shadow-black w-96 h-16 ring-2 ring-white pl-4">
            <span className='text-white text-xl'>Lorem ipsum dolor sit amet.</span>
          
            <button onClick={handlcloseModal} className=" relative  top-6 text-center text-sm pl-1 pr-1 h-6 bg-blue-500 text-white rounded-lg">Close</button>
          </div>
       
        </div>
         )}
   
    </div>

    </div>
    </>
  )
}

export default Modal