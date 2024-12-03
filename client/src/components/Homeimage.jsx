import { motion } from "framer-motion";
import React from "react";
import { GiEvilWings } from "react-icons/gi";
export const Homeimage = () => {
  motion
  return (
    <div data-scroll data-scroll-speed="-.2" className='relative w-full h-full bg-cover bg-center bg-[url("data:image/jpeg;base64,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")]'>
      <div>
        <div>
          <div className="  "></div>
          <div className="textstructure  text-white  text-center px-3">
            <div className="masker">
              <h1 className=" text-[6vw] py-40 leading-[.75] tracking-tighter font-nmregular">
                  WE CREATE
              </h1>
            </div>
           
            <div className="masker"></div>
            <div className="masker">
              <h1 className=" text-[10vw]  leading-[0.5] tracking-tighter font-nmregular">
                SOLUTION'S
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
