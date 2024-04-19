import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
const Problems = () => {
  return (
    <>
    <Helmet>
  <meta name="keywords" content="Problems, DSA Problems, Algorithmic Questions, Pattern Questions, Array Questions, Bit Manipulation Questions" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://codesaarthi.com/Problems" />
  <meta name="description" content="Explore a collection of algorithmic problems, including DSA problems, pattern questions, array questions, and bit manipulation questions. Enhance your problem-solving skills and gain valuable insights into various topics." />
  <title>Algorithmic Problems: DSA, Patterns, Arrays, Bit Manipulation | codesaarthi</title>
  <meta property="og:title" content="Algorithmic Problems: DSA, Patterns, Arrays, Bit Manipulation |codesaarthi" />
  <meta property="og:description" content="Explore a collection of algorithmic problems, including DSA problems, pattern questions, array questions, and bit manipulation questions. Enhance your problem-solving skills and gain valuable insights into various topics." />
  <meta property="og:image" content="https://codesaarthi.com/img/logo.png" />
  <meta property="og:url" content="https://codesaarthi.com/Problems" />
  <meta property="og:type" content="Education-Website" />
  <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>

<div className="container-fluid" style={{backgroundColor:' #1A1A1A'}}>
      <div className="container-lg container-fluid " style={{minHeight:'100vh'}}>

        <div className="row w-lg-75 w-100  g-0 py-3">

          <div className="col-lg-4 col-12 my-2 pe-lg-2">
            <div class=" card  tilt-effect2 " style={{ backgroundColor: '#262626' }}>
              <div class="card-body text-light">
                <h5 class="card-title "> Basics Array Question  </h5>
                <p class="card-text"> Practise Basic Questions to clear concepts
                </p>

                <Link to= "/ArrayProblems" ><button type="button" class="btn  text-light text-capitalize" style={{backgroundColor:'purple'}}>Start Solving</button></Link>
              </div>
            </div>
          </div>

         
        </div>
      </div>
      </div>



    </>
  )
}

export default Problems