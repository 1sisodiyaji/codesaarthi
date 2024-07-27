import React from 'react';

const gigs = [
  { 
    img : "https://res.cloudinary.com/ducw7orvn/image/upload/v1722020155/Section_4_qi4xs8.png"
  },
  {
    img: "https://res.cloudinary.com/ducw7orvn/image/upload/v1722062394/E-commerce_dkgnns.png"
  },
  {
    img: "https://res.cloudinary.com/ducw7orvn/image/upload/v1722062394/WordPress_zdj5nx.png"
  },
  {
    img: "https://res.cloudinary.com/ducw7orvn/image/upload/v1722062393/Landing_uuaxhd.png"
  },
  {
    img: "https://res.cloudinary.com/ducw7orvn/image/upload/v1722020154/Section_3_oxyx7p.png"
  }, 
  {
    img: "https://res.cloudinary.com/ducw7orvn/image/upload/v1722062393/pwa_qagngh.png"
  }, 
  {
    img : "https://res.cloudinary.com/ducw7orvn/image/upload/v1722020154/Section_2_gtpz9x.png"
  }, 
  {
    img: "https://res.cloudinary.com/ducw7orvn/image/upload/v1722062394/Testing_aqclai.png" 
  },
];

const Gigs = () => {
  return (
    <div className="container" style={{minHeight: '100vh'}}>
      <h4 className='my-2 '>Our Gigs</h4>
      <div className="row d-flex justify-content-center">
        {gigs.map((gig, index) => (
          <div key={index} className=" col-lg-6 col-12  borderColor  rounded-4" 
          style={{
            backgroundImage: `url(${gig.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center', 
            margin: '5px',
            color: 'white',
            position: 'relative',
            height: '140px',
            width: '340px'
          }}
          > 

          <div className='btn btn-sm rounded-8 text-capitalize' style={{marginTop: '95px'  , marginLeft: '40px'}}> Continue </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gigs;
