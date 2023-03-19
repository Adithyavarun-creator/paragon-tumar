import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./SliderContent.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const carouselImages = [
  {
    id: 1,
    imageLink:
      "https://images.unsplash.com/photo-1535478044878-3ed83d5456ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fHBsYWluJTIwY29sb3JzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60",
    // million $ Fine art
    text1: "Own and exchange million",
    text2: " $ Fine art",
    text3: "on your smartphone ",
  },
];

export default function SwiperSlides() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {carouselImages.map((image) => (
          <SwiperSlide className="sliderBox" key={image.id}>
            <div>
              <img className="sliderImage" alt="" src={image.imageLink} />
            </div>
            <div className="sliderImagetextPosition">
              <span className="sliderImagetext">{image.text1}</span>
              <span className="sliderImagetext">{image.text2}</span>
              <span className="sliderImagetext">{image.text3}</span>
            </div>
            <div className="sliderImageButtonpos">
              <button className="sliderImageButton">Learn More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
