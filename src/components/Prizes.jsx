import React from "react";
import Data from "../animations/Animation - 1707146220634.json";
import Lottie from "react-lottie";
import { FaTrophy } from "react-icons/fa";
const Prizes = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div
      className=" flex flex-col items-center overflow-hidden justify-center bg-[#0e1538] p-9 pt-[10vh] gap-6"
      id="prizes"
    >
      <div
        data-aos="fade-up"
        className=" flex items-center justify-center gap-2 text-white text-3xl border-b-2 py-2 border-white"
      >
        <FaTrophy />
        <h2 className=" text-white">Prizes</h2>
      </div>
      <div className=" flex flex-col md:flex-row items-center justify-center">
        <div className=" md:w-[50vw] flex items-center justify-center text-7xl gap-4 text-white"></div>
        <div
          data-aos="fade-left"
          className=" flex items-center overflow-hidden justify-end md:w-[50vw]"
        >
          <Lottie
            className=" bg-transparent"
            options={defaultOptions}
            height={350}
            width={350}
          />
        </div>
      </div>
    </div>
  );
};

export default Prizes;
