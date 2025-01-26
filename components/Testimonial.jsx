import React, { useCallback, useState } from "react";
import { ImQuotesLeft } from "react-icons/im";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";

import AnimatedText from "./AnimatedText";
import Image from "next/image";

// sample data for projects wiht various categories
const slides = [
  {
    img: "/assets/testimonial/img-1.png",
    name: "All Pakistan LPG distributor Association",
    message:
      "MD Law Associates has been an exceptional legal partner for our business. Their deep understanding of Pakistan's regulatory environment and innovative approach to problem-solving have been instrumental in ensuring our compliance and achieving favorable outcomes in complex cases.",
  },
  {
    img: "/assets/testimonial/img-2.png",
    name: "Aftab Traders (PVT) Limited- Oil and Gas",
    message:
      "MD Law Associates handled my case with remarkable professionalism and expertise. Their dedication to achieving the best outcome was evident throughout the process.",
  },
  {
    img: "/assets/testimonial/img-3.png",
    name: "Bridge Power Batteries Pvt . Ltd. Hyderabad",
    message:
      "The legal team at MD Law Associates provided me with practical and effective solutions to my tax issues. Their knowledge and attention to detail were outstanding.",
  },
  {
    img: "/assets/testimonial/img-4.png",
    name: "Karachi Paper and Board Mills Pvt Ltd",
    message:
      "I highly recommend MD Law Associates for their excellent handling of my financial dispute. Their expertise in banking laws is truly commendable.",
  },
  {
    img: "/assets/testimonial/img-5.png",
    name: "Biotech Pakistan (PVT) Limited- Medical",
    message:
      "MD Law Associates' guidance on a Sharia-compliant financing project was exceptional. Their deep understanding of Islamic finance made the process smooth and efficient.",
  },
  {
    img: "/assets/testimonial/img-6.png",
    name: "H S J Steel Industries, Karachi",
    message:
      "The team at MD Law Associates is reliable and resourceful. They successfully resolved a complex regulatory issue for my business, exceeding expectations.",
  },
  {
    img: "/assets/testimonial/img-7.png",
    name: "Dr. Surgeon Muhammad Altamash- Medical",
    message:
      "MD Law Associates has been my trusted partner for years, offering expert legal advice and unmatched commitment to client service.",
  },
];

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  //state to store the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <div className="py-24 overflow-hidden">
      <div className="container mx-auto">
        <AnimatedText
          text="What Clients Say"
          textStyles="h2 mb-[30px] xl:mb-[60px] text-center"
        />
        <div className="flex flex-col lg:flex-row gap-12">
          {/* slider info */}
          <div
            className="w-max xl:w-[600px]  flex flex-col justify-center items-center xl:items-start
          text-center xl:text-left mx-auto xl:mx-0"
          >
            <ImQuotesLeft className="text-9xl text-accent/20 leading-none mb-4" />
            <h3 className="h3 mb-2">{slides[activeSlide].name}</h3>
            <p className="mb-8 max-w-[360px]">{slides[activeSlide].message}</p>
            {/* slider btns */}
            <div className="flex gap-3">
              <button
                onClick={handlePrevious}
                className="text-2xl bg-accent w-[48px] h-[48px]
              text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all
              duration-300"
              >
                <FiArrowLeft />
              </button>

              <button
                onClick={handleNext}
                className="text-2xl bg-accent w-[48px] h-[48px]
              text-white rounded-full flex items-center justify-center hover:bg-accent-hover transition-all
              duration-300"
              >
                <FiArrowRight />
              </button>
            </div>
          </div>
          {/* Slider */}
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            onSwiper={setSwiperRef}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)} // update the active slide index
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full h-[400px] xl:h-[500px]"
          >
            {slides.map((slide, index) => {
              return (
                <SwiperSlide key={index} className="h-full select-none">
                  <div className="w-full h-full flex items-end">
                    <div
                      className={`relative ${
                        activeSlide === index ? "h-full" : "h-[240px]"
                      } flex items-end rounded-2xl overflow-hidden transition-all duration-500 relative w-full`}
                    >
                      <Image
                        src={slide.img}
                        className="object-cover object-center"
                        quality={100}
                        fill
                        alt={`${slide.name} testimonial`}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
