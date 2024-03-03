import React from 'react';
import { Link } from 'react-router-dom';
import Dsa from './Roadmap/Dsa';

const Roadmap = () => {
  return (
    <>

      <div className="container-fluid py-5 design">
        <div className="row g-6">

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: '#031A33' }}>
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 class="card-title text-light">DSA Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'scroll', height: '400px ' }}>
                 <Dsa/>
                </div>
                <div className='text-end'>
                  <Link to="/dsa" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: '#6aa1b4' }}>
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 class="card-title text-light">OS Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'scroll', height: '400px ' }}>

                </div>
                <div className='text-end'>
                  <Link to="/dsa" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: '#6aa1b4' }}>
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 class="card-title text-light">DBMS Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'scroll', height: '400px ' }}>

                </div>
                <div className='text-end'>
                  <Link to="/dsa" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div class="card border p-3" style={{ backgroundColor: '#6aa1b4' }}>
              <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 class="card-title text-light">CN Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'scroll', height: '400px ' }}>

                </div>
                <div className='text-end'>
                  <Link to="/dsa" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div >
    </>
  );
};

export default Roadmap;
