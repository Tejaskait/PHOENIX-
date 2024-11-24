import React, { useEffect,useRef,useState} from "react";


function Tracking() {
   /* useEffect(() =>{
        window.addEventListener("mousemove",(e) =>{
            console.log(e.clientX,e.clientY);
        })
    }); */
  return (
    <div className="tracker w-full h-screen overflow-hidden ">
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  ">
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3  relative items-center justify-center rounded-full bg-zinc-900">
              <div className="line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 ">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center">
            <div className="w-2/3 h-2/3  relative items-center justify-center rounded-full bg-zinc-900">
              <div className="line absolute  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  w-full h-10 ">
                <div className="w-10 h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tracking;
