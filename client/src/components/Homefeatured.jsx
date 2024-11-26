import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";


export default function Homefeatured() {
  const cards =[useAnimation(),useAnimation()];
  const handleHover = (index)=>{
cards[index].start({y: "0"});
  }
  const handleHoverEnd = (index)=>{
    cards[index].start({y: "100"});
      }
  return (
    <div data-scroll-section data-scroll className=' w-full  py-20 bg-cover bg-center bg-[url("https://e0.pxfuel.com/wallpapers/447/980/desktop-wallpaper-white-grid-white-grid-aesthetic.jpg")]'>
      <div className="w-full px-20 ">
        <h1 className="text-[6vw] py-10 font-nmregular tracking-tighter">
          Employee Welfare :-
        </h1>
      </div>
      <div className="px-20 font-nmregular">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div onHover={()=> handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className="cradsconttainer relative w-1/2 h-[68vh]">
            <h1 className="uppercase absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-0 text-[#f7e835] flex overflow-hidden font-nmregular text-9xl leading-none tracking-tighter z-[0]">
              {"meal".split("").map((item, index) => (
                <motion.span initial={{y: "100%"}} animate={cards[0]} transition={{ease: [0.76, 0, 0.24, 1],delay: index*.01}} className="inline-block">{item}</motion.span>
              ))}
            </h1>

            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full  bg-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzJmchB_Egdf1MArVpwRDz3I2vshuqfBX2w&s"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div onHover={()=> handleHover(0)} onHoverEnd={()=> handleHoverEnd(0)} className="cradsconttainer relative w-1/2 h-[68vh]">
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <h1 className="uppercase absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-full text-[#f7e835] flex overflow-hidden font-nmregular text-9xl leading-none tracking-tighter z-[0]">
                {"blog".split("").map((item, index) => (
                  <motion.span initial={{y: "100%"}} animate={cards[1]} transition={{ease: [0.76, 0, 0.24, 1],delay: index*.01}} className="inline-block">{item}</motion.span>
                ))}
              </h1>
              <img
                className="w-full   bg-cover"
                src="https://c0.wallpaperflare.com/preview/639/306/330/aerial-background-blog-cafe.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
