import React from 'react'
import { Link } from 'react-router-dom'

const Theory = () => {
  return (
    <>
      <div className="container-fluid my-5 py-5" style={{ minHeight: '100vh' }}>
        <div className="row">
          <div className="col-lg-4 col-12">
            <div className="card border p-3 tilt-effect" style={{ backgroundColor: '#6aa1b4' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className="col-4"  >
                    <img src="../img/Array.jpg" className="img-fluid rounded-8  " style={{height: '18vh' }}/>
                  </div>
                  <div className="col-8 align-self-center">
                    <div><h5 className="card-title text-light">Array in Short</h5></div>

                    <div><Link to="/array">
                      <div className="btn text-warning text-capitalize bg-dark">Read it..</div>
                    </Link>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-12"></div>
          <div className="col-lg-4 col-12"></div>
        </div>
      </div>
    </>
  )
}

export default Theory