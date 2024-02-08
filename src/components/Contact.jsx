import React from "react";
import Lottie from "react-lottie";
import Data from "../animations/Animation - 1707033212018.json";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GiGlobe } from "react-icons/gi";
import NBA from "../images/nba.png";
const Contact = () => {
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
      id="contact"
    >
      <div
        data-aos="fade-up"
        className=" flex items-center justify-center gap-2 text-white text-3xl border-b-2 py-2 border-white"
      >
        <FaPhone />
        <h2 className=" text-white">Contact Us </h2>
      </div>
      <h2 className=" text-4xl py-5 font-bold text-purple-500 animate-bounce text-center">
        Vaish College Of Engineering
      </h2>
      <div className=" flex flex-col md:flex-row items-center justify-center">
        <div className=" md:w-[50vw] flex items-center justify-center text-7xl gap-4 text-white">
          <a
            data-aos="fade-up"
            href="https://chat.whatsapp.com/JzMAcORtyzp71MMqTewmWJ"
            className=" cursor-pointer hover:opacity-70 duration-200"
          >
            <FaWhatsapp className=" text-green-500 " />
          </a>
          <a
            data-aos="fade-down"
            href=""
            className=" cursor-pointer hover:opacity-70 duration-200"
          >
            <AiFillInstagram className=" text-purple-500 " />
          </a>
          <a
            data-aos="fade-up"
            href="https://www.linkedin.com/in/vaish-college-of-engineering-686b47169?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className=" cursor-pointer hover:opacity-70 duration-200"
          >
            <AiFillLinkedin className=" text-blue-500" />
          </a>
          <a
            data-aos="fade-down"
            href="https://vcertk.com/"
            className=" cursor-pointer hover:opacity-70 duration-200"
          >
            <img src={NBA} className=" h-[70px] w-[70px]" alt="" />
          </a>
        </div>
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

export default Contact;
