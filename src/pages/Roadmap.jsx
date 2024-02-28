import React from 'react';
import { Link } from 'react-router-dom';

const Roadmap = () => {
  return (
    <>

      <div className="container-fluid my-5 py-5" style={{minHeight: '100vh'}}>
        
          <div class="card border p-3" style={{ backgroundColor: '#6aa1b4' }}>
            <div class="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
              <div className="row">
                <div className="col-4">
                  <img src="../img/logo.png" class="img-fluid" />
                </div>
                <div className="col-8 ">
                  <h5 class="card-title text-light">DSA Roadmap</h5>
                  <Link to="/dsa">
                  <div className="btn text-warning text-capitalize bg-dark">Check it Out</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
       

      </div>

    </>
  );
};

export default Roadmap;
