import React, { useRef } from "react";
import { GiEvilWings } from "react-icons/gi";
import Aboutmark from "../components/Aboutmark";
import Homemark from "../components/Homemark";
import Tracking from "../components/Tracking";
import { Homeimage } from "../components/Homeimage";
import Homefeatured from "../components/Homefeatured";
import Cards from "../components/Cards";
import Lasteye from "../components/Lasteye";

import Header from "../components/Header";

export default function Home() {

  const ref = useRef(null);
  return (
    <div  className="relative w-full h-full  pt-1">
      
      <Header />
      
     <Homeimage/>
      
      <div className="mt-15 "></div>
      
      <div className=""></div>
      <Homemark />
      <Aboutmark />
      <Tracking/>
      <Homefeatured />
      <Cards />
      <Lasteye/>
    </div>
    
  );
}
