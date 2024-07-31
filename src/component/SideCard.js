import React from 'react'
import { Link } from 'react-router-dom' 
import TruncateText from "../config/TruncateText";

const SideCard = ({id ,image , link , title , name , formattedDate}) => {  
return(
    <div className="border rounded-6 mb-2"  key={id}>
    <div className="row g-0">
      <div className="col-3 d-flex justify-content-center align-items-center">
        <img
          src={image || "https://res.cloudinary.com/ducw7orvn/image/upload/v1721024136/codesaarthi/article-1721024134471.png"}
          alt="Author"
          style={{ width: '35px' }}
          className="img-fluid rounded-circle"
        />
      </div>
      <div className="col-9">
        <div className="card-body">
         <Link to = {link} className="iconColor" >  <small style={{ fontSize: '0.6rem' }}> <TruncateText text = {title} maxLength = {35} /></small> </Link>
        </div>
      </div>
    </div>
    <small className="text-muted text-center ps-2" style={{ fontSize: '0.6rem' }}>By {name} | {formattedDate}</small>

  </div>) 
}

export default SideCard