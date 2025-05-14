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
    <div className="flex   mt-3 mb-3 items-center space-x-8">
      <div className="w-full ">
        <div className="w-[80%] h-[500px]  mx-auto max-w-4xl">
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
                  className="w-full h-[500px]  object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* <div className=" w-[50%] ">
        <h1 className="text-8xl  font-bold">{currentHeading}</h1>
      </div> */}
    </div>
  );
};

export default ImageSlider;
