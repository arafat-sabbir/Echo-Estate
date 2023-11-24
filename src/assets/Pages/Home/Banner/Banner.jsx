import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        navigation={true}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-[100vh]"
      >
        <SwiperSlide>
          <img
            className="w-full  rounded-xl"
            src="https://i.ibb.co/fkRmdn3/pexels-max-rahubovskiy-5997993.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co/HpBmbph/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.webp"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co/6Z6Q4Rk/greg-rivers-r-Ch-FUMw-Ae7-E-unsplash.webp"
          />
          <h3>this is a test text</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full rounded-xl"
            src="https://i.ibb.co/4dq6wnS/film-screen-with-bean-bag-chairs-rooftop-1.webp"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
