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
    <div className="-mt-28">
      <Swiper
        spaceBetween={90}
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
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/fkRmdn3/pexels-max-rahubovskiy-5997993.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-2 text-xl font-semibold">Discover Your Dream Home</h1>
                <p className="mb-5 text-5xl font-bold">
                Find the Perfect Property for Your Lifestyle
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/HpBmbph/frames-for-your-heart-2d4l-AQAlb-DA-unsplash.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-2 text-xl font-semibold">Unlock Your Homeownership Journey</h1>
                <p className="mb-5 text-5xl font-bold">
                Explore Homes Tailored to Your Needs
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/6Z6Q4Rk/greg-rivers-r-Ch-FUMw-Ae7-E-unsplash.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-2 text-xl font-semibold ">Invest in Your Future with Us</h1>
                <p className="mb-5 text-5xl font-bold">
                Explore Real Estate Opportunities Today
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/4dq6wnS/film-screen-with-bean-bag-chairs-rooftop-1.webp)",
            }}
          >
            <div className="hero-overlay bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-2 text-xl font-semibold">
                Elevate Your Living Experience
                </h1>
                <p className="mb-5  text-5xl font-bold">
                Discover Exceptional Properties in Prime Locations
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
