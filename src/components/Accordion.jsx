import React from "react";
import Lottie from "react-lottie";
import Data from "../animations/Animation - 1707029151421.json";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
const FAQ = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const questionAnswerArray = [
    {
      question: ". What is TechFusion Fest?",
      answer:
        "TechFusion Fest is an annual extravaganza that brings together college students from various disciplines to showcase their talents in three major categories: Technical, Cultural, and Sports. It is a platform designed to foster creativity, innovation, and healthy competition among the youth.",
    },
    {
      question: " When and where will TechFusion Fest take place?",
      answer:
        "TechFusion Fest 2024 will be held on 28th Feb - 1st March at Vaish College of Engineering , Rohtak. The event promises a day filled with excitement, learning, and fun.",
    },
    {
      question: " What are the main events at TechFusion Fest?",
      answer:
        " TechFusion Fest comprises three main categories \n Technical Events: Engage in cutting-edge tech challenges, coding competitions, and innovative project showcases. \nCultural Events: Showcase your artistic talents through dance, music, drama, and various cultural performances. \nSports Events: Participate in friendly sports competitions, including indoor and outdoor games.",
    },
    {
      question: " Who can participate in TechFusion Fest?",
      answer:
        "TechFusion Fest is exclusively for college students. All undergraduate and postgraduate students are welcome to participate in the events. There is no participation fee, making it accessible to everyone.",
    },
    {
      question: "Is there any participation fee for the events?",
      answer:
        " No, there is no participation fee for any of the events at TechFusion Fest. We believe in providing an inclusive platform for students to showcase their skills without financial barriers.",
    },
    {
      question: " How can I register for TechFusion Fest?",
      answer:
        "Registration details is provided in this website itself. Follow the registration process and make sure to submit the required information accurately.",
    },
  ];
  return (
    <div
      className=" flex flex-col items-center justify-center bg-[#0e1538] p-9 gap-6 pt-[10vh] overflow-hidden"
      id="doubts"
    >
      <h2
        data-aos="fade-up"
        className=" flex items-center justify-center text-white text-3xl border-b-2 py-2 border-white "
      >
        {" "}
        Doubts ?
      </h2>
      <div className=" flex flex-col md:flex-row items-center justify-center bg-[#0e1538]">
        <div
          data-aos="fade-right"
          className=" flex flex-col items-center justify-center md:w-[50vw]"
        >
          <Lottie options={defaultOptions} height={300} width={300} />
        </div>
        <div data-aos="fade-left" className=" w-[100vw] md:w-[50vw]">
          <Accordion
            allowZeroExpanded={true}
            className=" w-[80%] mx-auto md:ml-0 "
          >
            {questionAnswerArray.map((item, index) => (
              <AccordionItem
                key={index}
                className=" shadow-lg shadow-purple-700 my-3 rounded-lg"
              >
                <AccordionItemHeading>
                  <AccordionItemButton>{item.question}</AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className=" text-white">{item.answer}</p>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
