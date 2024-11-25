import React from "react";

export default function Homefeatured() {
  return (
    <div className=' w-full  py-20 bg-cover bg-center bg-[url("https://e0.pxfuel.com/wallpapers/447/980/desktop-wallpaper-white-grid-white-grid-aesthetic.jpg")]'>
      <div className="w-full px-20 ">
        <h1 className="text-[6vw] py-10 font-nmregular tracking-tighter">
          Employee Welfare :-
        </h1>
      </div>
      <div className="px-20 font-nmregular">
        <div className="cards w-full flex gap-10 mt-10">
          
          <div className="cradsconttainer relative w-1/2 h-[68vh]">
          <h1 className="uppercase absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-full text-[#f7e835] font-nmregular text-9xl leading-none tracking-tighter z-[0]">
          <h1 className="uppercase absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-full text-[#f7e835] font-nmregular text-9xl leading-none tracking-tighter z-[0]">
                {"meal".split('').map((item,index)=> <span>{item}</span>)}
          </h1>
          </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full  bg-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzzJmchB_Egdf1MArVpwRDz3I2vshuqfBX2w&s"
                alt=""
              />
            </div>
          </div>
          <div className="cradsconttainer relative w-1/2 h-[68vh]">
          
            <div className="card w-full h-full rounded-xl overflow-hidden">
            <h1 className="uppercase absolute translate-x-1/2 -translate-y-1/2 top-1/2 right-full text-[#f7e835] font-nmregular text-9xl leading-none tracking-tighter z-[0]">
                {"blog".split('').map((item,index)=> <span>{item}</span>)}
          </h1>
              <img
                className="  bg-cover"
                src="https://c0.wallpaperflare.com/preview/639/306/330/aerial-background-blog-cafe.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
