import React from "react";
import Search from "./Mobile/Search";
import Arrow_Right from "../assets/Arrow_Right.svg";
import {  NewRestaurants } from "../assets/assests";
import Heart_Icon from "../assets/Heart_Icon.png";
import VISA_ICON_1 from "../assets/VISA_ICON_1.png";
import VISA_ICON_2 from "../assets/VISA_ICON_2.png";
import Clock_icon from "../assets/Clock_icon.svg";
import { useNavigate } from "react-router";

const Restaurants = () => {

  const navigate = useNavigate()
  return (
    <div className="md:hidden mx-4 items-center">
      <div className="flex justify-between my-4">
        <img onClick={() => navigate('/')} className="w-3 rotate-180 " src={Arrow_Right} alt="" />
        <h1 className="font-bold text-gray2 text-2xl">Restaurants</h1>
        <img className="" src="" alt="" />
      </div>
      <Search />
      {/* Repeat where you ordered */}
      <div>
        <h2 className="font-medium text-xl mx-4 text-gray2">
          Repeat where you ordered
        </h2>
        <div>
          {NewRestaurants.slice(4, 6).map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-3  mx-4 my-6  rounded-lg shadow-md shadow-zinc-300 relative h-28  "
              >
                <img className="w-36 mx-2 my-2 " src={item.image} alt="" />
                <div className="text-center items-center ">
                  <h2 className="font-bold ml-6 mt-5 text-gray2">
                    {item.name}
                  </h2>
                  <div className="flex justify-center items-center gap-1 ml-6 my-1 ">
                    <img className="pt-0.5" src={Clock_icon} alt="" />
                    <p className="font-light text-sm">{item.mintues}</p>
                  </div>
                  <div className="flex items-center justify-center ml-6 my-2">
                    <img className="" src={VISA_ICON_1} alt="" />
                    <img className="" src={VISA_ICON_2} alt="" />
                  </div>
                </div>
                <img className="absolute right-20" src={item.rating} alt="" />
                <img
                  className="absolute right-6 top-20 w-4"
                  src={Heart_Icon}
                  alt=""
                />
              </div>
            );
          })}
        </div>
        {/* 75 Restaurants in your area */}
      </div>
      <div>
        <h2 className="font-light text-xl mx-4 text-gray2">
          75 Restaurants in your area
        </h2>
        <div>
          {NewRestaurants.slice(6, 10).map((item, index) => {
            return (
              <div
                key={index}
                className="grid grid-cols-3  mx-4 my-6  rounded-lg shadow-md shadow-zinc-300 relative h-28  "
              >
                <img className="w-36 mx-2 my-2 " src={item.image} alt="" />
                <div className="text-center items-center ">
                  <h2 className="font-bold ml-6 mt-5 text-gray2">
                    {item.name}
                  </h2>
                  <div className="flex justify-center items-center gap-1 ml-6 my-1 ">
                    <img className="pt-0.5" src={Clock_icon} alt="" />
                    <p className="font-light">{item.mintues}</p>
                  </div>
                  <div className="flex items-center justify-center ml-6 my-2">
                    <img className="" src={VISA_ICON_1} alt="" />
                    <img className="" src={VISA_ICON_2} alt="" />
                  </div>
                </div>
                <img className="absolute right-20 " src={item.rating} alt="" />
                <img
                  className="absolute right-6 top-20 w-4"
                  src={Heart_Icon}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
