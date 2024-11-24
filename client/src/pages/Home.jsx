import React from "react";
import { GiEvilWings } from "react-icons/gi";
import Aboutmark from "../components/Aboutmark";
import Homemark from "../components/Homemark";
import Tracking from "../components/Tracking";
import { Homeimage } from "../components/Homeimage";

export default function Home() {
  return (
    <div className="w-full h-screen  pt-1">
      <Homeimage/>
      
      <div className="mt-15 "></div>
      
      <div className=""></div>
      <Homemark />
      <Aboutmark />
      <Tracking/>
    </div>
    
  );
}
