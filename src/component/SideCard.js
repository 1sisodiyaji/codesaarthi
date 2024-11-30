import React from 'react'
import { Link } from 'react-router-dom'  

const SideCard = ({image , link , title }) => {  
return(
    <div className="card mb-2">
    <div className="row g-0">
      <div className="col-4 d-flex justify-content-center align-items-center">
        <img
          src={image ? image :  "https://res.cloudinary.com/ducw7orvn/image/upload/v1721024136/codesaarthi/article-1721024134471.png"}
          alt="Author" 
          className="img-fluid"
        />
      </div>
      <div className="col-8">
        <div className="card-body"> 
           <h4 > {title}</h4>  
           <Link to = {link}> <button className="btn btn-sm text-capitalize rounded-6 tilt-effect2" > Continue <i className="fi fi-ts-workflow-setting-alt ps-2"></i></button></Link>
        </div>
      </div>
    </div> 

  </div>) 
}

export default SideCard