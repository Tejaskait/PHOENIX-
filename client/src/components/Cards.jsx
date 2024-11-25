import React from "react";
import { HiPhoneOutgoing } from "react-icons/hi";
import { BsGearWideConnected } from "react-icons/bs";




export default function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-32 gap-5">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative rounded-xl flex justify-center items-center  w-full h-full bg-[#004D43]">
            <j1 className="font-nmregular  self-center text-[#CDEA68] text-6xl">PHOENIX</j1>
            <button className=" absolute left-10 text-[1vw] text-[#CDEA68] border-[#CDEA68] px-5 py-1 rounded-full border-2 bottom-10 ">&copy; 2012-2024</button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#335752]">
        <j1 className="font-nmregular  self-center text-[#CDEA68] text-6xl"><HiPhoneOutgoing />
        </j1>
            <button className=" absolute left-10 text-[1vw] uppercase text-[#CDEA68] border-[#CDEA68] px-5 py-1 rounded-full border-2 bottom-10 ">contact
            </button></div> 
        <div className="card relative flex justify-center items-center rounded-xl w-1/2 h-full bg-[#335752]">
        <j1 className="font-nmregular  self-center text-[#CDEA68] text-6xl"><BsGearWideConnected />

        </j1>
            <button className=" absolute left-10 text-[1vw] uppercase text-[#CDEA68] border-[#CDEA68] px-5 py-1 rounded-full border-2 bottom-10 ">machinery</button></div> 
      </div>
    </div>
  );
}
