import React from "react";
import { FaTools } from "react-icons/fa";
import { GiMusicalNotes } from "react-icons/gi";
import { MdSportsCricket } from "react-icons/md";
import { GoProjectRoadmap } from "react-icons/go";
import { Link } from "react-router-dom";
const EventSection = () => {
  return (
    <div
      className=" flex flex-col items-center justify-center w-[100vw] bg-[#0e1538] py-8 pt-[10vh] "
      id="events"
    >
      <div
        data-aos="fade-right"
        className=" flex items-center justify-center gap-2 text-white text-3xl border-b-2 py-2 border-white"
      >
        <GoProjectRoadmap />
        <h2 className=" text-white">Events </h2>
      </div>
      <div className=" flex  flex-wrap items-center justify-evenly bg-[#0e1538] p-9 w-full gap-3">
        <div className=" hover:-translate-y-4 duration-300 ">
          <Link
            to={"/cultural"}
            data-aos="fade-right"
            className="borderLight relative h-[150px] w-[250px] rounded-lg shadow-lg shadow-purple-700 m-3 flex items-center justify-center bg-[#0e1538] hover:shadow-md hover:shadow-white hover:bg-red-500  overflow-hidden"
          >
            <div className=" text-white text-lg z-10 items-center flex flex-col justify-center gap-2">
              <GiMusicalNotes className=" text-2xl" /> <h2> Cultural Events</h2>
            </div>
          </Link>
        </div>{" "}
        <div className=" hover:-translate-y-4 duration-300 ">
          <Link
            to={"/technical"}
            data-aos="fade-up"
            className="borderLight relative h-[150px] w-[250px] hover:-translate-y-4  hover:shadow-md hover:shadow-white hover:bg-red-500 flex items-center justify-center bg-[#0e1538]  duration-300 overflow-hidden rounded-lg shadow-lg shadow-purple-700 m-3"
          >
            <div className=" text-white text-lg z-10 items-center flex flex-col justify-center gap-2">
              <FaTools className=" text-2xl" /> <h2> Technical Events</h2>
            </div>
          </Link>
        </div>
        <div className=" hover:-translate-y-4 duration-300 ">
          <Link
            to={"/sports"}
            data-aos="fade-left"
            className="borderLight relative h-[150px] w-[250px] hover:-translate-y-4  hover:shadow-md hover:shadow-white hover:bg-red-500 flex items-center justify-center bg-[#0e1538]  duration-300 overflow-hidden rounded-lg shadow-lg shadow-purple-700 m-3"
          >
            <div className=" text-white text-lg z-10 items-center flex flex-col justify-center gap-2">
              <MdSportsCricket className=" text-2xl" /> <h2> Sports Events</h2>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventSection;
