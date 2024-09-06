import React from 'react'
import { WobbleCardDesign } from '../../components/WobbleCardDesign'
import { TabsDesign } from '../../components/Tabs'
import { HeroScrollDesign } from '../../components/HeroScrollDesign'
import WithoutLogin from '../../components/Home/WithoutLogin'
import { selectCurrentUser } from '../../store/slices/userSlice';
import { useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom'
import UserData from '../../components/Home/Profile'

const Home = () => {
  const user = useSelector(selectCurrentUser); 
  return (
    <>
      <Helmet>
        <meta
          name="keywords"
          content="codesaarthi,code saarthi, saarthi ,dsa Question , CodeSaarthi, Code saarthi , Web Development, Coding, Programming, Interview Preparation"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://codesaarthi.com/" />
        <meta
          name="description"
          content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!"
        />
        <title>Codesaarthi | Coding and Programming Hub</title>
        <meta
          property="og:title"
          content="codesaarthi | Coding and Programming Hub"
        />
        <meta
          property="og:description"
          content="Explore the world of coding and programming. Learn web development, prepare for interviews, and discover a variety of projects and tutorials. Start your coding journey with us!"
        />
        <meta
          property="og:image"
          content="https://codesaarthi.com/logo.png"
        />
        <meta property="og:url" content="https://codesaarthi.com" />
        <meta property="og:type" content="Website" />
        <link
          rel="icon"
          type="image/png"
          href="https://codesaarthi.com/favicon.ico"
          sizes="32x32"
        />
      </Helmet>
      <div className="bg-slate-100 dark:bg-gray-950 min-h-screen text-black dark:text-white">
        {user ?
          <>
          <div className='flex justify-start'>
            <div className="drawer lg:drawer-open  ">
              <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
              <div className="drawer-content flex flex-col items-start ps-3 pb-3">
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                  Open drawer
                </label>
                  <div><UserData/></div>
              </div>
              <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-slate-200 dark:bg-gray-800 text-black dark:text-white h-screen w-80 p-4">
                
                  <div className="avatar pt-20 mx-auto ">
                  <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                  <img src={user.image} alt={user.name} loading='lazy' title={user.name} className='h-24 w-24 rounded-full object-cover' />     
                  </div>
                  </div> 
                  <li><h1 className='text-lg'>{user.name}</h1></li>
                  <div className="collapse collapse-plus bg-slate-200 dark:bg-gray-800">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">Projects</div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-slate-200 dark:bg-gray-800">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Roadmaps</div>
                    <div className="collapse-content">
                      <p>hello</p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus bg-slate-200 dark:bg-gray-800">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">Courses</div>
                    <div className="collapse-content">
                      <Link><p>hello</p></Link>
                    </div>
                  </div>
                </ul>
              </div>

            
            </div>
           
            
            </div>
          </>
          :
          <>
            <div className='pt-20   pb-5'>
              <WithoutLogin />
              <HeroScrollDesign title1={'Start Your learning '} title2={'with Our Tools'} img={'https://res.cloudinary.com/ducw7orvn/image/upload/v1724612288/Screenshot_2024-08-16_200811_h2gcp1.png'} />
              <TabsDesign />
              <WobbleCardDesign />
            </div>
          </>}
      </div>
    </>
  )
}

export default Home