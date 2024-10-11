"use client";

import React from "react";
import Navbar from "../_components/navbar";
// @ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardShop from "./card";

const Page = () => {
  return (
    <div>
      <div className="h-[33rem] pb-6 bg-[url('/assets/images/bg-shop.jpg')] bg-fixed bg-no-repeat bg-cover w-full ">
        <div className="w-[1150px] m-auto relative ">
          <div className="py-8">
            <Navbar />
          </div>

          <div className="my-carousel">
            <Slider {...settings}>
              <div className="h-[20rem] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/slide1.jpg"
                  alt="slide"
                />
              </div>
              <div className="h-[20rem] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/slide2.jpg"
                  alt="slide"
                />
              </div>
              <div className="h-[20rem] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/assets/images/slide3.jpg"
                  alt="slide"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-[1150px] m-auto my-14">
        <div className="grid grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6]?.map((value) => {
            return <CardShop />;
          })}
        </div>
      </div>
    </div>
  );
};

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
};

export default Page;
