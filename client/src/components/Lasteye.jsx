import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Lasteye() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div  className="tracker w-full  overflow-hidden ">
      <div className="relative font-fgsemibold leading-none py-20    w-full h-full bg-[#CDEA68]">
        <div className="uppercase text-[8vw] justify-center items-center flex">
          <h1>create</h1>
        </div>
        <div className="uppercase text-[8vw]  justify-center items-center flex">
          <h1>your</h1>
        </div>
        <div className="uppercase text-[8vw] justify-center items-center flex">
          <h1>"solution"</h1>
        </div>
        <div className="uppercase text-[8vw] justify-center items-center flex">
          <h1>with</h1>
        </div>
        <div className="uppercase text-[8vw] justify-center items-center flex">
          <h1>us</h1>
        </div>
        <div className="flex justify-center text-[8vw] items-center">
        <FaArrowDownLong />

        </div>
       <div className="justify-center py-4 items-center flex">
        <button className="flex gap-3 justify-center  items-center font-nmregular px-5 py-6 bg-zinc-900 rounded-full tracking-tighter  text-white ">
            <Link to="/ourservices">
              <li className=" uppercase hover:underline">lets go ! ! ! !</li>
            </Link>
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div  className="absolute flex gap-10 top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%]  ">
          <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3  relative items-center justify-center rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 "
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-[10vw] h-[10vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3  relative items-center justify-center rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 "
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
