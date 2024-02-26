import React from "react";
import "../App.css";

const Home = () => {
  return (
   <>
   <div className="row" style={{backgroundColor:'#67a0d4', height:'100vh'}}>
    <div className="col-4  d-flex align-items-center justify-content-center">
    <img src="../img/girl1.png" className="img-fluid DashImageView" style={{height:'100vh'}} alt="girl image" />
    </div>
    <div className="col-4 d-flex align-items-center justify-content-center">
    <img src="../img/logo.png" className="img-fluid DashImageView" alt="logo of codesaarthi" />
    </div>
    <div className="col-4 d-flex align-items-center justify-content-center">
      <img src="../img/mision1.png" className="img-fluid DashImageView" style={{height:'100vh'}} alt="boy image" />
    </div>
   
   </div>
   </>
  );
};

export default Home;
