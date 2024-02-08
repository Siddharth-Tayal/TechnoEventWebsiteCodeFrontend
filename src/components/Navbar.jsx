import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaBook } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";
import Data3 from "../animations/Animation - 1707026607235.json";
import Lottie from "react-lottie";
import Logo from "../images/LOGO1.png";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Data3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" overflow-hidden bg-white sticky p-3 px-6 z-20 w-full flex items-center justify-between top-0 left-0  h-[10vh] shadow-sm shadow-purple-700">
      <Link
        to={"/"}
        className=" text-3xl font-bold font-sans text-blue-500 flex items-center justify-center gap-2"
      >
        <img
          src={Logo}
          alt=""
          className="h-[50px] w-[50px] md:h-[70px] md:w-[70px] "
        />
        <p className=" flex items-center justify-center gap-0">
          Tech<span className=" text-violet-700">Fusion</span>
        </p>
      </Link>
      <div className=" hidden lg:flex justify-between text-lg text-blue duration-200 gap-3">
        <HashLink
          to={"/#home"}
          className=" hover:text-purple-700 hover:blur-none duration-200"
        >
          Home
        </HashLink>
        <HashLink
          to={"/#events"}
          className=" hover:text-purple-700 hover:blur-none duration-200"
        >
          Events
        </HashLink>
        <HashLink
          to={"/#prizes"}
          className=" hover:text-purple-700 hover:blur-none duration-200"
        >
          Prizes
        </HashLink>
        <HashLink
          to={"/#doubts"}
          className=" hover:text-purple-700 hover:blur-none duration-200"
        >
          Doubts
        </HashLink>
        <HashLink
          to={"/#contact"}
          className=" hover:text-purple-700 hover:blur-none duration-200"
        >
          Contact
        </HashLink>
      </div>
      <div className="hidden lg:flex  items-center justify-center">
        {" "}
        <a
          href=""
          className="p-3 text-purple-700 hover:underline duration-200 font-semibold flex items-center justify-center gap-2"
        >
          <FaBook /> Guide
        </a>
        <Link
          to={"/register"}
          className=" hover:bg-purple-700 hover:border-white hover:text-white duration-300 p-3 rounded-lg shadow-purple-700 flex items-center justify-center border-2 font-semibold text-purple-700 border-purple-700"
        >
          Participate
        </Link>
      </div>
      <FaBars
        onClick={() => setOpen(true)}
        className=" block lg:hidden cursor-pointer hover:text-blue-700 text-purple-700 text-3xl duration-200"
      />
      <div
        className=" lg:hidden fixed w-screen h-[100vh] bg-gray-900 top-0 duration-700 shadow-inner shadow-purple-800  backdrop-blur-sm"
        style={{ right: open === true ? "0" : "-1000px" }}
        onClick={() => setOpen(false)}
      >
        <div className=" h-[100vh] flex flex-col items-center justify-center">
          <div className=" absolute h-[100%] w-[100vw] flex items-center justify-center -z-10">
            <Lottie options={defaultOptions3} />
          </div>{" "}
          <div className="  flex flex-col gap-4  text-white items-center ">
            <h2 className=" text-3xl   text-purple-600 mb-9 font-bold ">
              Techno <span className="text-white">Fusion</span>
            </h2>
            <HashLink
              to={"/#home"}
              className=" hover:text-purple-700 hover:blur-none duration-200"
            >
              Home
            </HashLink>
            <HashLink
              to={"/#events"}
              className=" hover:text-purple-700 hover:blur-none duration-200"
            >
              Events
            </HashLink>
            <HashLink
              to={"/#prizes"}
              className=" hover:text-purple-700 hover:blur-none duration-200"
            >
              Prizes
            </HashLink>
            <HashLink
              to={"/#doubts"}
              className=" hover:text-purple-700 hover:blur-none duration-200"
            >
              Doubts
            </HashLink>
            <HashLink
              to={"/#contact"}
              className=" hover:text-purple-700 hover:blur-none duration-200"
            >
              Contact
            </HashLink>
            <div className="flex items-center justify-center mt-9">
              {" "}
              <a
                href=""
                className="p-3 text-white hover:underline duration-200 font-semibold flex items-center justify-center gap-2"
              >
                <FaBook /> Guide
              </a>
              <Link
                to={"/register"}
                className=" hover:bg-purple-700 bg-white  hover:border-white hover:text-white duration-300 p-3 rounded-lg shadow-purple-700 flex items-center justify-center border-2 font-semibold text-purple-700 border-purple-700"
              >
                Participate
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
