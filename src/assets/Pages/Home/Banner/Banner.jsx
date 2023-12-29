import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";
import { Typewriter } from "react-simple-typewriter";
import { useInView } from "framer-motion";

const Banner = () => {
  const animate1 = useRef(null)
  const isInView1 = useInView(animate1)
  return (
    <div className="-mt-28 tracking-wider leading-[60px] !font-serif">
      <Swiper
        spaceBetween={90}
        effect={"fade"}
        autoplay={{
          delay:4500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper h-[100vh]"
      >
        <SwiperSlide>
          <div
           ref={animate1} style={{
            transform: isInView1 ? "none" : "scale('0)",
            opacity: isInView1 ? "1" : "0",
            transition: "all 1.8s",
            backgroundImage:
                "url(https://i.ibb.co/fkRmdn3/pexels-max-rahubovskiy-5997993.webp)",
        }}
            className="hero min-h-screen "
            
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
              <div className="max-w-3xl">
                <h1 className="mb-2 text-xl font-semibold">
                  <Typewriter
                    words={["Discover Your Dream Home"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
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
                <h1 className="mb-2 text-xl font-semibold">
                  <Typewriter
                    words={["Unlock Your Homeownership Journey"]}
                    loop={false}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </h1>
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
              <h1 className="mb-2 text-xl font-semibold"><Typewriter
            words={['Invest in Your Future with Us']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
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
              <h1 className="mb-2 text-xl font-semibold"><Typewriter
            words={['Elevate Your Living Experience']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /></h1>
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
