import React from 'react'

const Offline = () => {

  const handleReload = () => {
    window.location.href = "/";

  }
  return (
    <>
    <div className="container-fluid vh-100 ">
      <div className='d-flex justify-content-center align-items-center'>
        
      <img src="img/offline.png" alt="offline page image" loading='lazy' className='img-fluid' title='offline bro please turn on your internet' />
        </div> 
  
        <h6 className='text-warning my-2 text-center' style={{cursor : 'pointer'}} onClick={handleReload}>Please Refresh Your page</h6>
    </div>
    
    </>
  )
}

export default Offline