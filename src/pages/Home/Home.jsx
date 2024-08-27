import React from 'react'
import { WobbleCardDesign } from '../../components/WobbleCardDesign'
import { TabsDesign } from '../../components/Tabs'
import { HeroScrollDesign } from '../../components/HeroScrollDesign'
import WithoutLogin from '../../components/Home/WithoutLogin'
import { selectCurrentUser } from '../../store/slices/userSlice'; 
import { useSelector } from 'react-redux';
import {Helmet} from 'react-helmet';

const Home = () => { 
  const user = useSelector(selectCurrentUser);
  console.log(user);
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
        <title>codesaarthi | Coding and Programming Hub</title>
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
      <div className="bg-slate-100 dark:bg-gray-950 min-h-screen text-black dark:text-white py-5">
        {user ?
        <>
        You are logged in 
        </>
        :
        <>
       
        <WithoutLogin/>
        <HeroScrollDesign title1={'Start Your learning '} title2={'with Our Tools'} img={'https://res.cloudinary.com/ducw7orvn/image/upload/v1724612288/Screenshot_2024-08-16_200811_h2gcp1.png'} />
        <TabsDesign />
        <WobbleCardDesign />
        </>}
      </div>
    </>
  )
}

export default Home