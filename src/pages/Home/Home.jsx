import React from 'react' 
import { HeroDesign } from '../../components/HeroDesign'
import { WobbleCardDesign } from '../../components/WobbleCardDesign' 
import { TabsDesign } from '../../components/Tabs'
import { HeroScrollDesign } from '../../components/HeroScrollDesign'

const Home = () => {
  return (
   <>
 <div className="bg-slate-100 dark:bg-gray-950 min-h-screen">
    <HeroDesign/>
    <HeroScrollDesign title1={'Start Your learning '} title2={'with Projects'} img={'https://res.cloudinary.com/ducw7orvn/image/upload/v1720994849/HeroImage_w0lwv2.png'}/>
 
 <TabsDesign/>
 <WobbleCardDesign/>
 </div>
   </>
  )
}

export default Home