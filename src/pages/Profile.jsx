import React from 'react';

const Profile = () => {
    const pic = localStorage.getItem("user_ProfilePic");
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center g-0" style={{ minHeight: '100vh' }}>
                <div className="card p-3 g-0" style={{ height: '500px', width: '420px' , backgroundColor:'#3393df' , boxShadow:'5px 5px 10px #000435' }}>
                    <div className='d-flex justify-content-center align-items-center' >
                        <div style={{borderRadius:'50%' , border:'5px solid green'}} className='p-1'>
                        <img src= {pic ? (
                        <>
                          <img
                            src={pic}
                            className="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                          />
                        </>
                      ) : (
                        <>
                        <div className="border border-success"> 
                          <i className="fi fi-ss-user"></i>
                          </div>
                        </>
                      )} className="img-fluid" style={{ height: '25vh' }} />
                        </div>
                    </div>

                    <div className="card-header">Golu Singh</div>
                    <div className="card-body mb-4">
                        <h5 className="card-title">About</h5>
                        <p className="card-text">
                            Hey you have to write there the about section.
                        </p>
                        <button type="button" className="btn btn-success text-capitalize">Update</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile