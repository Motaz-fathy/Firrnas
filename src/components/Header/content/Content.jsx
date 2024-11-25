import React from "react";
import PrimaryBtn from "../../../shared/button/primaryBtn/PrimaryBtn";
import IconsAnimation from "./IconsAnimation/IconsAnimation";
import CardImage from "./CardImage";
import { FaArrowTrendUp } from "react-icons/fa6";
const Content = () => {
  return (
    <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between bg-transparent mx-auto px-4 md:px-8">
      {/* Section 1: Head Title, Paragraph, Rates */}
      <section className="w-full md:w-3/6  p-4 mb-4 md:mb-0 md:mr-4 rounded-md shadow-sm flex flex-col items-start max-md:items-center max-md:text-center gap-10">
        <h1 className="text-2xl md:text-5xl font-bold text-gray-100">
          One Touch, Limitless Horizons.
        </h1>
        <p className=" text-gray-300 md:text-md">
          “Imagine a world where your dreams blend seamlessly with reality. Our
          technology doesn’t just make it possible; It brings it to life, right
          here, right now.”
        </p>
        <PrimaryBtn />

        <div className="w-full flex justify-start items-center gap-4 h-auto mt-4 max-md:justify-center ">
          <div className="flex flex-col items-start ">
            <h1 className="text-lg md:text-2xl font-bold text-gray-100">
              $1.2M+
            </h1>
            <span className="text-md md:text-md font-thin text-gray-400">
              REVENUE
            </span>
          </div>

          <div className="flex flex-col items-start ">
            <h1 className="text-lg md:text-2xl font-bold text-gray-100">
              3500+
            </h1>
            <span className="text-md md:text-md font-thin text-gray-400">
              MODELS
            </span>
          </div>

          <div className="flex flex-col items-start ">
            <h1 className="text-lg md:text-2xl font-bold text-gray-100">50+</h1>
            <span className="text-md md:text-md font-thin text-gray-400">
              EXPERTS
            </span>
          </div>
        </div>
      </section>

      {/* Section 2: Animate Icons */}
      <section className="w-full md:w-1/6 h-auto p-4 mb-4 md:mb-0 md:mx-4 rounded-md shadow-sm flex justify-center items-center max-md:hidden">
        <IconsAnimation />
      </section>

      {/* Section 3: Image Animation */}
      <section className="w-full md:w-2/6  p-2 rounded-md  flex justify-center items-center max-md:px-4 relative">
       <CardImage />
       <div className="absolute flex flex-col justify-center gap-2 items-center  p-2 border-[1px] border-gray-500 backdrop-blur-sm -bottom-5 -right-5 max-md:right-5 h-20 w-60 bg-gradient-to-l from-white/20 to-gray-200/10 shadow-xl rounded-lg">

         <div className="flex justify-between items-center  w-full text-white">
           <span className="text-[0.8rem]">Conversion Rate</span>
           <div className="flex justify-center items-center text-[0.8rem] gap-2"> <FaArrowTrendUp /> <span>70%</span></div>
         </div>

         <div className="flex justify-between items-center  w-full text-gray-400">
           <span className="text-[0.8rem]">Returns</span>
           <div className="flex justify-center items-center text-[0.8rem] gap-2"> <FaArrowTrendUp /> <span>25%</span></div>
         </div>

       </div>
      </section>


    </div>
  );
};

export default Content;
