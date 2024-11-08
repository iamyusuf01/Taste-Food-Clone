import React from "react";
import { assets_Data } from "../assets/assests";
import Taste_now from "../assets/Taste_now.svg";

const Banner = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-16 bg-primary h-[200px] relative  ">
        <img className="w-[380px] right-[60%] items-center absolute " src={assets_Data.burger_img} alt="" />
        <div className="text-white ml-[55%] m-10 w-[60%]">
          <h1 className="font-bold text-2xl w-[300px] ">Don’t miss out on your favourite food</h1>
          <p className="font-light text-[10px] w-[300px] pt-4">
            Sign up now to enjoy your favourite food anywhere, anytime. It is
            quick, easy and accessible to anyone of any age. Free of charge,
            taste now is the solution to your every day foods.
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center ">
        {/* Right Side */}
        <div>
          <h1 className="ml-10 m-6 font-bold text-3xl w-[300px] text-gray2">Food <span className="text-primary">delivery </span> within 45 minutes</h1>
          <p className="ml-10 m-6 w-[45%] text-xs font-light">
            If your food takes more than 45 minutes, it’s on us. We are proud to
            say we take delivery very seriously, so that you don’t have to worry
            about how or when the food gets to you.
          </p>
          <button className="border ml-10 rounded-md bg-primary text-white text-xs h-8 w-20 hover:scale-110 transition-all duration-300">Order now</button>
        </div>

        {/* left Side */}
        <div >
          <img className="" src={Taste_now} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
