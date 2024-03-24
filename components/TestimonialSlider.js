import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import { FaFilePdf } from "react-icons/fa";
import Image from "next/image";

// Recommendation letter data
export const recommendationData = [
  {
    image: "/t-avt-1.png",
    name: "Recommendation 1",
    position: "Position 1", // Add position of the recommender
    pdfPath: "/recom.pdf",
  },
  {
    image: "/t-avt-2.png",
    name: "Recommendation 2",
    position: "Position 2", // Add position of the recommender
    pdfPath: "/recom.pdf",
  },
  {
    image: "/t-avt-3.png",
    name: "Recommendation 3",
    position: "Position 3", // Add position of the recommender
    pdfPath: "/recom.pdf",
  },
];

const RecommendationSlider = () => {
  const handleViewRecommendation = (pdfPath) => {
    window.open(pdfPath, "_blank");
  };

  return (
    <Swiper
      navigation={true}
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className="h-[400px]"
    >
      {recommendationData.map((recommendation, slideIndex) => (
        <SwiperSlide key={slideIndex}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            {/* Recommendation Image */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                <div className="mb-2 mx-auto">
                  <Image
                    src={recommendation.image}
                    width={100}
                    height={100}
                    alt="Recommendation Image"
                  />
                </div>
              </div>
              {/* Recommendation Name */}
              <div className="text-lg font-semibold">{recommendation.name}</div>
              {/* Recommendation Position */}
              <div className="text-sm text-white">
                {recommendation.position}
              </div>
            </div>
            {/* View/Download Button */}
            <div className="flex-1 flex flex-col justify-center items-center md:items-start before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* PDF Icon */}
              <div className="mb-4">
                <FaFilePdf className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0" />
              </div>
              {/* View/Download Button */}
              <button
                onClick={() => handleViewRecommendation(recommendation.pdfPath)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
              >
                View Recommendation
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecommendationSlider;
