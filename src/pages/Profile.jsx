import React from 'react'

const Profile = () => {
    return (
        <>
            <div className="container-fluid vh-100 bg-black">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-1"></div>
                        <div className="col-lg-10 ">
                            <div className="card p-lg-5 text-light" style={{backgroundColor:'#1E1E1E' , top:'50%'}}>
                                <div className="row g-0">
                                    <div className="col-4">
                                        <img src="https://shots.codepen.io/username/pen/eYWPQwK-800.jpg?version=1628274966" className='img-fluid imageHeight' style={{borderRadius:'50%'}} alt="" />
                                    </div>
                                    <div className="col-8 ps-2">
                                        <p className = "">  Name : Golu singh :</p>
                                        <p className = ""> institue: Trident Academy of technology:</p>
                                        <p className = "">  Location : bhubaneswar :</p> 
                                        <p className = "">  Date Of Birth :</p> 
                                        <p className = ""> Contact :</p> 
                                        <p className = "">  Socail Media links :</p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile