import React from 'react'
import { Image } from '@chakra-ui/react';
// Import Swiper React components
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


//import images to slider
import img1 from './recommends/1.jpg';
import img2 from './recommends/2.jpg';
import img3 from './recommends/3.jpg';
import img4 from './recommends/4.jpg';
import img5 from './recommends/5.jpg';
import img6 from './recommends/6.jpg';
import img7 from './recommends/7.jpg';
import img8 from './recommends/8.jpg';
import img9 from './recommends/9.jpg';
import img10 from './recommends/10.jpg';

const img_style = {
   width : '100%',
}
export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={1}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><Image sx={img_style} src={img1} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img2} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img3} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img4} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img5} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img6} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img7} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img8} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img9} /></SwiperSlide>
      <SwiperSlide><Image sx={img_style} src={img10} /></SwiperSlide>


      
    </Swiper>
  );
};