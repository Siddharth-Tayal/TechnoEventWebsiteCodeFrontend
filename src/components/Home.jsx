import React from "react";
import Lottie from "react-lottie";
import { Typewriter } from "react-simple-typewriter";
import Data from "../animations/Animation - 1707235537186.json";
import Data2 from "../animations/Animation - 1707235243443.json";
import Data3 from "../animations/Animation - 1707026607235.json";
import EventSection from "../components/EventSection";
import Accordion from "../components/Accordion";
import Contact from "./Contact";
// import Timeline from "./Timeline";
import Prizes from "./Prizes";
const Home = () => {
  const words = [
    "Technological Events...",
    "Debates...",
    "Group Discussion...",
    "Managment Events...",
    "Sports Events...",
    "Cultural Events...",
  ];
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: Data2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Data3,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div id="home" className="overflow-hidden">
      <div
        className=" relative flex flex-col-reverse gap-8 md:gap-0
      md:flex-row items-center justify-between  w-[100vw] bg-transparentverflow-hidden"
      >
        {" "}
        <div className=" absolute h-[100%] w-[100vw] flex items-center justify-center -z-10">
          <Lottie options={defaultOptions3} />
        </div>
        <div
          data-aos="fade-up"
          className="  flex items-end md:h-[90vh] justify-end"
        >
          <Lottie options={defaultOptions2} height={350} width={400} />
        </div>
        <div className=" md:absolute h-[100%] w-[100%] flex flex-col items-center justify-center">
          <h2
            data-aos="fade-up"
            className=" text-white text-3xl sm:text-4xl text-center px-3"
          >
            VCE Welcomes 👋
          </h2>
          <h2
            data-aos="fade-up"
            className=" text-white text-2xl sm:text-3xl text-center p-3 pt-0"
          >
            Tech-Fusion 28th Feb - 1st March 2
            <span className=" text-3xl sm:text-4xl text-white font-semibold">
              K
            </span>
            24
          </h2>
          <h2
            data-aos="fade-up"
            className=" text-white text-3xl sm:text-4xl text-center p-3 pt-0"
          ></h2>
          <p
            data-aos="fade-down"
            className=" text-white text-xl w-full text-center"
          >
            <Typewriter
              words={words}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </p>
        </div>
        <div
          data-aos="fade-down"
          className=" md:h-[90vh] flex items-start justify-start"
        >
          <Lottie
            height={250}
            width={300}
            className=" md:h-[400px] md:w-[400px]"
            options={defaultOptions}
          />
        </div>
      </div>
      <EventSection />
      {/* <Timeline /> */}
      <Prizes />
      <Accordion />
      <Contact />
    </div>
  );
};

export default Home;
