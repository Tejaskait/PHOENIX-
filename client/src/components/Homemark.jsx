import React from 'react'
import { motion } from 'framer-motion';

export default function Maerquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2"  className='relative w-full  py-10  bg-cover bg-center bg-[url("https://pa1.aminoapps.com/6857/e49e8fb24aa6897e737b730cd4169c4f9e3d6cb2_hq.gif")] rounded-t-xl  '>
      <div className='text-white'>
        <div className='border-b-2 border-t-2 font-fgsemibold border-zinc-300 hover:text-[#CDEA68] transition-colors duration-300 flex tracking-tighter whitespace-nowrap  overflow:hidden'>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[18vw]  uppercase leading-none font-nmregular  pr-20 font-bold'>we are PHOENIX</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[18vw] uppercase leading-none font-nmregular pr-20 font-bold '>we are PHOENIX</motion.h1>
          <motion.h1 initial={{x:0}} animate={{x: "-100%"}} transition={{ease:"linear",repeat:Infinity,duration: 5}} className='text-[18vw] uppercase leading-none font-nmregular pr-20 font-bold '>we are PHOENIX</motion.h1>
        </div>
      </div>
    </div>
  )
}
