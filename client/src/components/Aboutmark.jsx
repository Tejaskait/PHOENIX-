import React from "react";
import { Link } from "react-router-dom";
import { TiSocialLinkedin } from "react-icons/ti";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";


export default function About() {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1"  className="w-full py-10 bg-[#fc6d25] rounded-t-xl px-10">
      <h1 className="w-full border-t-[2px] border-[#000000] font-nmregular text-[4vw] leading-[8vw] tracking-tighter">
        The Leaders in Innovation
        <h1 className="font-nmregular text-[2vw] leading-[4vw] tracking-tighter">
          With a vision to drive innovation and efficiency across industries, we
          combine cutting-edge technology, advanced machinery expertise, and
          strategic consulting to deliver comprehensive solutions that empower
          businesses to thrive.
        </h1>
      </h1>
      <h1 className="font-nmregular ">
       
        Wth over 500 skilled professionals, we specialize in delivering
        superior data management, IT product development, and innovation &
        digital transformation services.
      </h1>
      <h1 className="font-fgsemibold py-5 ">
        Recognizing the industry’s technological gap, we embarked on a mission
        to drive digital transformation, developing cutting-edge IT solutions.
        Our commitment to excellence is underscored by our ISO 9001:2015
        certification, reflecting our dedication to quality management.
      </h1>
      <div className=" w-full flex gap-5 border-dotted  border-t-[2px] pt-10 mt-20  border-[#000000]">
        <div className="w-1/2 ">
          <h1 className="text-[3vw] tracking-tight font-italic font-nmregular px-4 ">
            About Us :
          </h1>
          <button className="flex gap-3  items-center font-nmregular px-5 py-6 bg-zinc-900 rounded-full tracking-tighter mt-5 text-white ">
            <Link to="/aboutus">
              <li className=" uppercase hover:underline">READ more</li>
            </Link>
            <div className="h-2 w-2 bg-zinc-100 rounded-full"></div>
          </button>
          <div className="py-11">
        <div className="">
        <h1 className="font-fgsemibold   text-[3vw] ">Amit Mahajan</h1>
        <h1 className="flex gap-5">
            <h1 className="font-nmregular">LINKDIN</h1>
            <j1 className="text-[2vw] "><LiaLongArrowAltRightSolid /></j1>
            <h1 className="text-[2vw]"> <TiSocialLinkedin /></h1>
       
        </h1>
        </div>
          <h1 className="font-nmregular ">
            Founder & CEO, Xcaliber Infotech Pvt. Ltd. CMD – The Phoenix Group®
          </h1>
          <h1 className="font-nmregular py-5 text-[1vw]">
          “We aspire to generate holistic value that encompasses all stakeholders; our clients, team members, partners, and communities.</h1>
          <h1 className="font-nmregular  text-[1vw]">
          This objective mirrors our expansion strategy, our mission, our fundamental principles, and our collaborative culture of mutual achievement.”
          </h1>
        </div>
        </div>
     
        <div className=" w-1/2 h-[70vh]  ">
          <img className="" src="https://phoenix.tech/wp-content/uploads/2024/10/Group-1321314505.png" alt="" />
          
        
        </div>
      </div>
    </div>
  );
}
