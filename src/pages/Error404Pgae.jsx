import React from 'react'
import { Helmet } from 'react-helmet'
const Error404Pgae = () => {
  return (
   <>
   <Helmet>
  <meta name="keywords" content="Error 404, Page Not Found, Not Found, Oops, Broken Link" />
  <meta name="robots" content="noindex, nofollow" />
  <link rel="canonical" href="https://codesaarthi.com/*" />
  <meta name="description" content="Oops! The page you are looking for is not found. Explore other sections of our website or return to the homepage. We apologize for any inconvenience." />
  <title>Error 404: Page Not Found | codesaarthi</title>
  <meta property="og:title" content="Error 404: Page Not Found | codesaarthi" />
  <meta property="og:description" content="Oops! The page you are looking for is not found. Explore other sections of our website or return to the homepage. We apologize for any inconvenience." />
  <meta property="og:image" content="https://codesaarthi.com/img/Error404.jpg" />
  <meta property="og:url" content="https://codesaarthi.com/*" />
  <meta property="og:type" content="Website" />
  <link rel="icon" type="image/png" href="https://codesaarthi.com/img/favicon.ico" sizes="32x32" />
</Helmet>

   <div className='d-flex align-items-center justify-content-center bg-light design'>
        <img src="img/error404.jpg" className='img-fluid' alt="" />
   </div>
   </>
  )
}

export default Error404Pgae