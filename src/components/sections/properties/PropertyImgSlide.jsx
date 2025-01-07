'use client'

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const PropertyImgSlide = ({property}) => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Navigation]}
      className="w-full h-full relative overflow-hidden"
      navigation
    >
      {property.images.map((img, index) => (
        <SwiperSlide
          key={index}
          className="group-hover:scale-110 transition-all duration-300"
        >
          <Image
            src={img}
            fill
            alt="property image"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default PropertyImgSlide;