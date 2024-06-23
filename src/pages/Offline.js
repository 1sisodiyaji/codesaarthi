import React from 'react'

const Offline = () => {
  return (
    <>
    <div className="container-fluid vh-100 bg-light d-flex justify-content-center align-items-center">
        <h6 className='text-danger'> Please turn on your Internet for further surfing ...</h6>
        <img src="img/offline.png" alt="offline page images" loading='lazy' className='img-fluid' title='offline bro please turn on your internet' />
    </div>
    
    </>
  )
}

export default Offline