// data
export const workSlides = {
  slides: [
    {
      projects: [
        {
          title: "GTK Unit Converter",
          path: "/thumb1.jpg",
          url: "https://github.com/lordoftheseas/GTK_UNIT.git",
        },
        {
          title: "My Personal Website",
          path: "/thumb2.jpg",
          url: "https://github.com/lordoftheseas/WebPortfolio.git",
        },
        {
          title: "Theta Tau Mobile Application",
          path: "/thumb3.jpg",
          url: "https://github.com/lordoftheseas/ThetaTau_App_inital.git",
        },
        {
          title: "Automated Greenhouse",
          path: "/thumb4.jpg",
          url: "https://github.com/lordoftheseas/Greenhouse.git",
        },
      ],
    },
    {
      projects: [
        // Add more projects for the second slide if needed
        {
          title: "GTK Unit Converter 2",
          path: "/thumb1.jpg",
          url: "https://example.com/project1",
        },
        {
          title: "My Personal Website 2",
          path: "/thumb2.jpg",
          url: "https://example.com/project2",
        },
        {
          title: "Theta Tau Mobile Application 2",
          path: "/thumb3.jpg",
          url: "https://example.com/project3",
        },
        {
          title: "Automated Greenhouse 2",
          path: "/thumb4.jpg",
          url: "https://example.com/project4",
        },
      ],
    },
  ],
};

// Component
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

const WorkSlider = () => {
  const [projectUrl, setProjectUrl] = useState(null);

  const navigateToProject = (url) => {
    setProjectUrl(url);
  };

  if (projectUrl) {
    // Redirect to the selected project URL
    window.location.href = projectUrl;
    return null; // Return null to prevent rendering anything while redirecting
  }

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.projects.map((project, projectIndex) => (
                <div
                  className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  key={projectIndex}
                  onClick={() => navigateToProject(project.url)} // Handle navigation on click
                >
                  <div className="flex items-center justify-center relative overflow-hidden group">
                    {/* image */}
                    <Image src={project.path} width={500} height={300} alt="" />
                    {/* overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                      <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                        {/* title part */}
                        <div className="delay-100">{project.title}</div>
                        {/* <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                          PROJECT
                        </div> */}
                        <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                          <BsArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
