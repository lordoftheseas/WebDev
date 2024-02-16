import React, { useState } from "react";
import { animate, motion } from "framer-motion";
import Image from "next/image";

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
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

// //  data
// const aboutData = [
//   {
//     title: "skills",
//     info: [
//       {
//         title: "Web Development",
//         icons: [
//           <FaHtml5 />,
//           <FaCss3 />,
//           <FaJs />,
//           <FaReact />,
//           <SiNextdotjs />,
//           // <SiFramer />,
//           // <FaWordpress />,
//           <FaPhp/>,
//           <FaNodeJs/>,
//         ],
//       },
//       {
//         title: "Languages",
//         icons: [<FaHtml5 />,<FaCss3 />,<FaJs />,<FaReact />,<SiNextdotjs />, <FaPython/>,<FaJava/>,],
//       },
//       // {
//       //   title: "UI/UX Design",
//       //   icons: [<FaFigma />],
//       // },
//       {
//         title: "Tools",
//         icons:[<FaGithub/>, <FaGit/>,<FaFigma />,<FaLinux/>,]
//       }
//     ],
//   },
//   {
//     title: "awards",
//     info: [
//       {
//         title: "Webby Awards - Honoree",
//         stage: "2011 - 2012",
//       },
//       {
//         title: "Adobe Design Achievement Awards - Finalist",
//         stage: "2009 - 2010",
//       },
//     ],
//   },
//   {
//     title: "experience",
//     info: [
//       {
//         title: "UX/UI Designer - XYZ Company",
//         stage: "2012 - 2023",
//       },
//       {
//         title: "Web Developer - ABC Agency",
//         stage: "2010 - 2012",
//       },
//       {
//         title: "Intern - DEF Corporation",
//         stage: "2008 - 2010",
//       },
//     ],
//   },
//   {
//     title: "credentials",
//     info: [
//       {
//         title: "Web Development - ABC University, LA, CA",
//         stage: "2011",
//       },
//       {
//         title: "Computer Science Diploma - AV Technical Institute",
//         stage: "2009",
//       },
//       {
//         title: "Certified Graphic Designer - ABC Institute, Los Angeles, CA",
//         stage: "2006",
//       },
//     ],
//   },
// ];

//components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
// import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <motion.div
      className="h-full overflow-y-auto" // Ensure vertical overflow is scrollable
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-32 xl:gap-64 w-2/3 xl:1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
            {/* BIOGRAPHY QUOTE  */}
            <span className="italic">
              A handcrafted, small-batch, artisinal pour-over version of the
              classic lorem ipsum generato.
            </span>
            {/* OUR SVG SIGNATURE BELOW */}
            <div className="self-end">
              {/* <svg
                width="289"
                height="248"
                viewBox="0 0 289 248"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="289" height="248" fill="#F5F5F5" />
                <path
                  d="M47 246C46.0608 222.99 43.3974 200.087 41.8889 177.111C39.2397 136.762 38.5299 96.316 38.4444 55.8889C38.4073 38.3148 38.4832 20.6829 39 3.11111C39.0014 3.0633 41.766 17.0228 42.1111 18.5556C53.2932 68.2246 72.312 115.898 88.6667 164C91.6793 172.861 90.7119 170 81.2222 170C55.1971 170 28.7913 168.208 3.44445 174.889C2.85379 175.045 1.22862 174.87 1.66667 174.444C4.62874 171.566 8.05195 169.203 11.2222 166.556C32.5362 148.756 53.8418 131.045 75.7778 114C118.924 80.4729 162.865 49.0068 208.889 19.6667C210.018 18.947 218 11.8582 218 16"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M46 5C52.3482 24.0446 58.8921 42.5343 64 61.9444C65.4693 67.5277 66.707 73.1398 68.7778 78.5556C70.3611 82.6965 73.1115 85.6941 74.5556 90.1111C76.0082 94.5546 74.6603 90.4914 73.5 88.9444C71.533 86.3218 69.6617 83.7276 68.9444 80.5C68.3932 78.0192 66.3484 76.0146 65.9444 73.3889C65.4312 70.0529 65 67.3459 65 63.9444C65 61.1374 63.1058 45.6312 68 48.2222C73.2823 51.0188 75.8739 53.97 78.4444 59.1111C81.1088 64.4399 80.4078 72.7171 80 78.2222C79.8307 80.508 75.5161 89.758 76 90"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M69 2C72.0598 8.57848 74.2869 15.4143 76.4444 22.3333C78.1607 27.8372 81.5271 33.3447 82.9444 38.7778C85.0826 46.9742 86.0603 55.4827 88.5556 63.5556C89.2098 65.6723 87.9628 71.0464 89.9444 70.0556C90.7129 69.6713 89.6617 65.1237 89.5 64.4444C87.9798 58.0595 87.6251 51.0483 89.0556 44.6111C89.3427 43.3189 99.4183 39.11 100.778 40.2222C102.233 41.4131 105 45.674 105 47.5C105 48.9196 105.906 49.2416 106.778 50.2222C108.274 51.9056 107.447 53.7144 108.222 55.5556C109.184 57.8392 111.228 59.6841 112 62"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M113 33C114.107 40.473 118.769 46.6131 120 54"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M103 8.00001C103 9.68726 99.9901 18.8818 102 19C104.901 19.1707 105.922 16.2598 108 16C112.227 15.4716 105.281 4.43778 103 9.00001"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M81 122C86.1503 132.769 92.1487 143.048 97.7778 153.556C99.0007 155.838 100.586 160.586 102 162"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M83 122C88.3683 119.56 108.127 110.366 112.444 119C116.934 127.98 104.652 138.093 98.6667 142.778C96.7422 144.284 94.0519 144.427 91.7222 144.944C90.9584 145.114 92.1941 144.996 92.2222 145C97.6357 145.82 103.591 149.524 108.444 151.556C132.151 161.479 156.599 168.021 180.611 176.833C183.026 177.72 191 179.232 191 183"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M124 128C122.167 131.894 121.596 140.919 125.444 143.778C129.301 146.643 134.137 144.126 132.889 139.444C131.65 134.8 121.827 124.393 126 126.778C130.765 129.5 134.045 136 140.444 136C151.593 136 140.377 122.089 135.444 120.444C131.917 119.268 124.763 118.55 121.5 120C118.7 121.244 118.746 123.591 116.778 125.778C112.776 130.225 114.921 141.595 117.556 146.111C119.758 149.886 120.736 154.64 124.222 157.778C125.792 159.19 134.644 158.116 136.444 157.944C142.427 157.375 147.468 153.899 152.167 150.444C169.495 137.703 183.567 121.951 200 108.222C220.292 91.269 240.999 76.1178 263.833 62.9444C271.196 58.6967 273.581 53.4186 279 48"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M149 128C148.274 121.103 143.146 112 153.944 112C156.802 112 158 112.894 160 115C162.653 117.793 162.246 116.212 160.556 113.556C158.511 110.343 160.808 105.17 165.222 105C171.458 104.76 175.094 107.641 178 112"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M165 74C170.986 82.3278 179.011 89.2978 183.889 98.3889C185.83 102.007 187.893 105.488 190 109"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M173 100C176.717 99.6283 179.919 97.4213 183.333 96.0556C184.483 95.5956 184.836 94.0685 186 94C188.196 93.8708 190 92.0552 190 94"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M203 84C205.776 82.4732 209 80.9396 209 77.5C209 76.0169 207.098 74.6148 205.556 75.0556C200.671 76.4511 199.895 79.0935 198.5 83C195.816 90.516 220 96.7599 220 83"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M202 40C206.575 47.1889 212.753 53.2698 217.333 60.5556C222.128 68.1811 226.123 75.9065 231.111 83.3889C242.169 99.9761 247.559 120.449 260 136"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M207 131C220.286 116.449 235.815 104.23 251.333 92.1667C259.633 85.7155 270.405 76.7748 279 72"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
                <path
                  d="M213 139C221.483 131.169 231.754 125.312 240.389 117.611C245.094 113.415 249.359 110.598 255 107.778C261.71 104.423 268.067 99.843 274.5 95.9444C277.879 93.8968 279.959 90.6597 283.444 88.7778C283.901 88.5314 288.465 86 287 86"
                  stroke="black"
                  stroke-width="3"
                  stroke-linecap="round"
                />
              </svg> */}
            </div>
            <div className="self-end">{/* SVG content */}</div>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
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
                C
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
            </div>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* Cytocybernetics */}
              <div className="flex justify-between h-auto">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black">
                    Intern, Software Engineer
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Comprehensive training in algorithm development, performance
                    analysis and worked on quality control and stability of
                    numerical solutions. Coding graphical user interfaces in C
                    using Glib and GTK and developing and implementing specific
                    Markov models of ion channel gating for use in a real-time
                    solver.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jan. 2024 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                    Cytocybernetics
                  </div>
                </div>
                {/* CENTRE */}
                <div className="w-1/6 flex items-center justify-center">
                  {" "}
                  {/* Centering the line */}
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* UB Information & Technology Department */}
              <div className="flex justify-between h-auto">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTRE */}
                <div className="w-1/6 flex items-center justify-center">
                  {" "}
                  {/* Centering the line */}
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black">
                    Tech Consultant
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Facilitated dedicated faculty, students, and alumni with
                    comprehensive IT consultation services. Addressing a range
                    of technical issues including computer, networking, UB
                    dedicated applications, and accounts at both the walk-up
                    location and the gaming center.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Aug. 2023 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                    UB Information & Technology Department
                  </div>
                </div>
              </div>

              {/* Undergraduate Teaching Assistant */}
              <div className="flex justify-between h-auto">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black">
                    Undergraduate Teaching Assistant (CSE: 199 - Seminar)
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Conducting recitations for over 60 students and coordinating
                    with faculty to deliver seven-module course content. Guided
                    students through a wide range of computer science concepts,
                    establishing a strong academic foundation.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Aug. 2023 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                    University at Buffalo
                  </div>
                </div>
                {/* CENTRE */}
                <div className="w-1/6 flex items-center justify-center">
                  {" "}
                  {/* Centering the line */}
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>

              {/* Undergraduate Research Assistant - Wildfire Damage */}
              <div className="flex justify-between h-auto">
                {/* LEFT */}
                <div className="w-1/3"></div>
                {/* CENTRE */}
                <div className="w-1/6 flex items-center justify-center">
                  {" "}
                  {/* Centering the line */}
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black">
                    Undergraduate Research Assistant
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Collaborated on research supervised by Dr. Negar Khorasani,
                    assessing the vulnerability of houses in wildfire-prone
                    areas, and analyzing post-wildfire data to correlate
                    construction features with damage levels.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jun. 2023 - Aug. 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                    University at Buffalo
                  </div>
                </div>
              </div>

              {/* Undergraduate Research Assistant - Misinformation */}
              <div className="flex justify-between h-auto">
                {/* LEFT */}
                <div className="w-1/3">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black">
                    Undergraduate Research Assistant
                  </div>
                  {/* JOB DESCRIPTION */}
                  <div className="p-3 text-sm italic">
                    Assisted Dr. Kenny Joseph at UB as a researcher on spread of
                    misinformation, analyzing over 7000+ datasets covering
                    frequency of misinformation shared among elderly people.
                    Developed proficiency in Python libraries pandas and NumPy
                    for data wrangling purposes.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    Jun. 2023 - Aug. 2023
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold text-black w-fit">
                    University at Buffalo
                  </div>
                </div>
                {/* CENTRE */}
                <div className="w-1/6 flex items-center justify-center">
                  {" "}
                  {/* Centering the line */}
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 xl:1/2"></div>
      </div>
    </motion.div>
  );
  // return <div>"Hello World"</div>
  // const [index, setIndex] = useState(0);
  // console.log(index);
  // return (
  //   <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
  //     <Circles />
  //     {/* avatar img */}
  //     <motion.div
  //       variants={fadeIn("right, 0.2")}
  //       initial="hidden"
  //       animate="show"
  //       exit="hidden"
  //       className="hidden xl:flex absolute bottom-0 -left-[370px]"
  //     >
  //       <Avatar />
  //     </motion.div>
  //     <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
  //       <div className="flex-1 flex flex-col justify-center">text</div>
  //       <div className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
  //         <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
  //           {aboutData.map((item, itemIndex) => {
  //             return (
  //               <div
  //                 key={itemIndex}
  //                 className={`${
  //                   index === itemIndex &&
  //                   "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
  //                 } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
  //                 onClick={() => setIndex(itemIndex)}
  //               >
  //                 {item.title}
  //               </div>
  //             );
  //           })}
  //         </div>
  //         <div className="bg-pink-400/10 py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
  //           {aboutData[index].info.map((item, itemIndex) => {
  //             return (
  //               <div
  //                 key={itemIndex}
  //                 className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
  //               >
  //                 {/* title */}
  //                 <div>{item.title}</div>
  //                 <div className="hidden md:flex">-</div>
  //                 <div>{item.stage}</div>
  //                 <div className="flex gap-x-4">
  //                   {/* icons */}
  //                   {item.icons?.map((icon, itemIndex) => {
  //                     return <div className="text-2x text-white">{icon}</div>;
  //                   })}
  //                 </div>
  //               </div>
  //             );
  //           })}
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default About;
