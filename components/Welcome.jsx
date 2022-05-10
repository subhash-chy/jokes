import React from "react";
import { Login, Testimonial, WhyJoker } from ".";
import { testimonials } from "../data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";
import Image from "next/image";

SwiperCore.use([Autoplay]);

function Welcome() {
  return (
    <>
      {/* Featured Image Section Only in Desktop */}
      <div className="relative w-full h-[40vh] md:h-[70vh]">
        <Image
          objectFit="cover"
          layout="fill"
          alt="Joker band"
          src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      <div className="px-8 md:px-16 pb-20">
        <div className="py-20 flex flex-col gap-16 md:flex-row">
          <Login />

          <WhyJoker />
        </div>

        <div className="">
          <h1 className="text-3xl font-semibold text-[#C900EC] mb-8">
            Testimonials
          </h1>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              940: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
            }}
            freeMode={true}
            speed={5000}
            freeModeMomentum={false}
            loop={true}
            autoplay={{ delay: 0, disableOnInteraction: false }}
          >
            {/* Testimonials Section */}
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.statement}>
                <Testimonial
                  avatar={testimonial.avatar}
                  name={testimonial.name}
                  statement={testimonial.statement}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Welcome;
