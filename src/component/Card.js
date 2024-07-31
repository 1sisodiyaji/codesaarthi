import React from 'react';
import { Link } from "react-router-dom";

const Card = ({ image, title, details, button1, icon1 , button2, icon2, link ,biggerbutton,biggerIcon}) => {
    return ( 
        <div className="">
        <div className="card p-2 animated-border"> 
            {image && (
                <div className="text-center">
                    <img
                        src={image}
                        alt={title || "Card image"}
                        className={`img-fluid  ${biggerbutton ? 'projectCardImage' : 'courseImage'}`}
                        loading="lazy"
                        title={title || "Card image"}
                    />
                </div>
            )}
 
            {title && <h5 className='text-center my-1'>{title}</h5>} 
            {details && <small className="text-capitalize">{details}</small>} 
            {(button1 ||  button2) && (
                <div>
                    <div className="row">
                        {button1 && (
                            <div className="col-6">
                                <Link to="#" className="btn btn-sm rounded-8 text-capitalize tilt-effect">
                                    {button1}<i className={`${icon1} ps-1`}></i>
                                </Link>
                            </div>
                        )}
                        {button2 && (
                            <div className="col-6 text-end">
                                <Link to={link || "#"} className="btn btn-sm rounded-8 text-capitalize tilt-effect2">
                                    {button2} <i className={`${icon2} ps-1`}></i>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {biggerbutton && 
             <div className="g-0 my-2">
             <Link to={link || "#"} className="btn btn-sm w-100 rounded-8 text-capitalize tilt-effect2">
                 {biggerbutton} <i className={`${biggerIcon} ps-1`}></i>
             </Link>
             </div>
            }
        </div> 
        </div>
    );
};
export default Card;
