import React from 'react';
import { Link } from 'react-router-dom';
import Dsa from './Roadmap/Dsa';
import Os from './Roadmap/Os';
import Dbms from './Roadmap/Dbms';
import ComputerNetworks from './Roadmap/ComputerNetworks';

const Roadmap = () => {
  return (
    <>

      <div className="container-fluid py-5 design">
        <div className="row g-6">

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33',overflowY:'auto' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">DSA Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'auto', height: '400px ' }}>
                 <Dsa/>
                </div>
                <div className='text-end'>
                  <Link to="/dsa" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">OS Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'scroll', height: '400px ' }}>
                  <Os/>
                </div>
                <div className='text-end'>
                  <Link to="/Os" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">DBMS Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'scroll', height: '400px ' }}>
<Dbms/>
                </div>
                <div className='text-end'>
                  <Link to="/Dbms" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
                </div>

              </div>
            </div>
          </div>

          <div className="col-lg-3 my-2 col-12">
            <div className="card border p-1" style={{ backgroundColor: '#031A33' }}>
              <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                <div className="row">
                  <div className='col-4'><img src="img/logo.png" className='img-fluid' alt="" /></div>
                  <div className='col-8 align-self-center'><h5 className="card-title text-light">CN Roadmap</h5></div>
                </div>
                <div className="conatiner-fluid" style={{ overflowY: 'scroll', height: '400px ' }}>
<ComputerNetworks/>
                </div>
                <div className='text-end'>
                  <Link to="/ComputerNetwork" className="btn text-warning text-capitalize bg-dark">Check it Out</Link>
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
