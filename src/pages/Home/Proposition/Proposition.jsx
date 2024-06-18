import React from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import swiperImg1 from "../../../assets/img/home-swiper/swiper-img-1.png";
import swiperImg2 from "../../../assets/img/home-swiper/swiper-img-2.png";

import "swiper/css/navigation";
import "swiper/css";
import  "./proposition.scss";

const proposition = [
  {
    id: 1,
    img: swiperImg1,
  },
  {
    id: 2,
    img: swiperImg2,
  },
  {
    id: 3,
    img: swiperImg1,
  },
  {
    id: 4,
    img: swiperImg2,
  },
  {
    id: 5,
    img: swiperImg2,
  },
  {
    id: 6,
    img: swiperImg2,
  },
  {
    id: 7,
    img: swiperImg2,
  },
  {
    id: 8,
    img: swiperImg2,
  },
];

const Proposition = () => {
  return (
    <section>
      <Swiper
        className={'homeSwiper'}
        navigation={true}
        modules={[Navigation, Autoplay]}
        slidesPerView={2}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: true,
        // }}
        spaceBetween={30}
      >
        {proposition.map((slide) => (
          <SwiperSlide key={slide.id} className={'swiperSlide'}>
            <img src={slide.img} alt="fibo" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Proposition;