import React from 'react'
import { Link } from 'react-router-dom';

import { LiaLongArrowAltDownSolid } from "react-icons/lia";

export default function Maerqueesignup() {
  return (
    <div className=' w-full py-10  bg-[#CDEA68] rounded-t-xl  '>
      <div className='text-white '>
        <div className='flex justify-center items-center tracking-tighter text-black whitespace-nowrap gap-6 overflow:hidden'>
          <h1 className='text-[3vw]   leading-none font-nmregular   '>Already have an ACCOUNT?</h1>
          <h1 className='text-[3vw]   leading-none font-nmregular   font-bold'>
          <LiaLongArrowAltDownSolid />


          </h1>
         
        </div>
        
      </div>
      <div className='flex justify-center items-center py-9'>
        <button className="flex gap-5 items-center font-nmregular px-10 py-6 bg-zinc-900 rounded-full tracking-tighter mt-5 text-white ">
            
        <Link to="/sign-in">
            <li className="">SIGN IN</li>
          </Link>
          
          <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
        </button>
        </div>
    </div>
  )
}