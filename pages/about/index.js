import Image from "next/image";
import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import experienceData from "./experienceData"; // Import experience data
// whole lotta red whole lotta red whole lotta red

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
  FaPython,
  FaJava,
  FaGithub,
  FaGit,
  FaLinux,
  FaPhp,
  FaNodeJs,
  FaArrowDown,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

const About = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <motion.div
      className="h-full overflow-y-auto"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-scroll lg:flex">
        {" "}
        {/* flex justify-center to center this here*/}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-32 xl:gap-64 w-2/3 xl:1/2">
          <div className="fixed right-0 top-100 hidden lg:block w-1/3 xl:1/2">
            <Image
              src="/avatar3.png"
              alt="Your Image"
              width={500}
              height={500}
            />
          </div>
          <div>
            <div
              className="flex flex-col gap-14 justify-center h-full"
              id="biography-section"
            >
              <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              {/* BIOGRAPHY QUOTE  */}
              <span className="italic">
                A handcrafted, small-batch, artisinal pour-over version of the
                classic lorem ipsum generato.
              </span>
              {/* OUR SVG SIGNATURE BELOW */}
              {/* <div className="self-end"></div> */}
              {/* <div className="self-end">SVG content</div> */}
              <button
                className="text-4xl text-gray-500 cursor-pointer"
                onClick={() => handleScroll("skills-section")}
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
          {/* NEW SECTION */}
          <div>
            <div
              className="flex flex-col gap-12 justify-center h-screen"
              id="skills-section"
            >
              <h1 className="font-bold text-2xl">SKILLS</h1>
              {/* SKILLS LIST */}
              <div className="flex gap-4 flex-wrap">
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Python
                  <FaPython className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Java
                  <FaJava className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  JavaScript
                  <FaJs className="ml-2" />
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  C/C++
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  HTML5
                  <FaHtml5 className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  CSS3
                  <FaCss3 className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  MySQL
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Arduino C
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React Native
                  <FaReact className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Git
                  <FaGit className="ml-2" />
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  React.js
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Node.js
                  <FaNodeJs className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Next.js
                  <SiNextdotjs className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Figma
                  <FaFigma className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  Linux
                  <FaLinux className="ml-2" />
                </div>
                <div className="flex items-center rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                  GitHub
                  <FaGithub className="ml-2" />
                </div>
              </div>
              <button
                className="text-4xl text-gray-500 cursor-pointer"
                onClick={() => handleScroll("experience-section")}
              >
                <FaArrowDown />
              </button>
            </div>
          </div>
          {/* NEW SECTION */}
          <div>
            <div
              className="flex flex-col gap-12 justify-center pb-48 h-full"
              id="experience-section"
            >
              <h1 className="font-bold text-2xl">EXPERIENCE</h1>
              <div className="">
                {/* Map over experienceData to dynamically generate experience sections */}
                {experienceData.map((experience, index) => (
                  <div
                    key={index}
                    className={`flex justify-between h-auto ${
                      index % 2 === 0 ? "flex-row-reverse" : ""
                    }`}
                  >
                    <div className="w-3/4"></div>
                    <div className="w-1/6 flex items-center justify-center">
                      <div className="w-1 h-full bg-gray-600 rounded relative">
                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                      </div>
                    </div>
                    <div className="w-3/4">
                      {/* this is where the gridbox changes its shape */}
                      <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black">
                        {experience.jobTitle}
                      </div>
                      <ul className="p-3 text-sm list-disc italic">
                        {/* Use map to render each responsibility as a bullet point */}
                        {experience.responsibilities.map(
                          (responsibility, idx) => (
                            <li key={idx}>{responsibility}</li>
                          )
                        )}
                      </ul>
                      <div className="p-3 text-red-400 text-sm font-semibold">
                        {experience.date}
                      </div>
                      <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                        {experience.company}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
