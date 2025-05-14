import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

const ImageSlider = ({ images, headings }) => {
  const [currentHeading, setCurrentHeading] = useState(headings[0]); // Initialize with the first heading

  const handleSlideChange = (swiper) => {
    setCurrentHeading(headings[swiper.realIndex]); // Update heading based on the active slide
  };

  return (
    <div className="flex flex-col lg:flex-row mt-3 mb-3 items-center lg:space-x-8 overflow-hidden">
      <div className=" w-full lg:w-[80%] mx-auto">
        <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px] mx-auto max-w-4xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            className="rounded-lg object-cover overflow-hidden"
            onSlideChange={handleSlideChange} // Listen for slide changes
          >
            {images.map((imgUrl, index) => (
              <SwiperSlide key={index}>
                <img
                  src={imgUrl}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* Heading Section */}
      
    </div>
  );
};

export default ImageSlider;