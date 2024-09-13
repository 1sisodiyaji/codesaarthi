import React from 'react'; 
import { Shadow_SM_Buttons} from '../Components/core/Buttons/Buttons';
import { Shadow_MD_Buttons } from '../Components/core/Buttons/Buttons';
import { Shadow_LG_Buttons } from '../Components/core/Buttons/Buttons';
import { Shadow_XL_Buttons } from '../Components/core/Buttons/Buttons';
import { Shadow_2XL_Buttons } from '../Components/core/Buttons/Buttons';
import { Shadow_3XL_Buttons } from '../Components/core/Buttons/Buttons';


function HomePage() {
  return (
   <>

   <div className='bg-bgColor h-screen pt-20 space-x-6 flex justify-start'>
     < Shadow_SM_Buttons/>
     <Shadow_MD_Buttons/>
     <Shadow_LG_Buttons/>
     <Shadow_XL_Buttons/>
     <Shadow_2XL_Buttons/>
     <Shadow_3XL_Buttons/>
   
   </div>
   </>
  )
}

export default HomePage