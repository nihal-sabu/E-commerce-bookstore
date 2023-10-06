import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import { Pagination } from 'swiper/modules';
import Product from '../components/Product';
import '../slider.css'
import img6 from '../img/img6.png'
import img5 from '../img/img5.png'
import img4 from '../img/img4.png'

const sliderData = [
  {
    img: img6,
    pretitle: 'Special Offer',
    titlePart1: 'Save 25%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop Now'
  },
  {
    img: img5,
    pretitle: 'Special Offer',
    titlePart1: 'Get Upto',
    titlePart2: '20% off on',
    titlePart3: 'new books',
    btnText: 'Shop Now'
  },
  {
    img: img4,
    pretitle: 'Special Offer',
    titlePart1: 'Save 20%',
    titlePart2: 'On your',
    titlePart3: 'first order',
    btnText: 'Shop Now'
  },
]


const MainSlider = () => {
  return (
    <Swiper modules={[Pagination]} 
      loop={true} 
      pagination={{
        clickable: true,
      }}
      className='mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'>
      <>
      {
        sliderData.map((slide, index) => {
          return <SwiperSlide key={index}>
            <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60]'>
              <div className='w-full lg:flex-1 '>
                <div className='uppercase mb-1 text-center lg:text-left'>{slide.pretitle}</div>
                <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
                  {slide.titlePart1} <br />
                  {slide.titlePart2} <br />
                  {slide.titlePart3}
                </div>
                <button className='btn btn-accent mx-auto lg:mx-0'>Shop Now</button>
              </div>
              <div className='flex-1'>
                <img className='xl:absolute xl:right-10 xl:bottom-10 xl:h-[400px] xl:w-[350px]' src={slide.img} alt="" />
              </div>
            </div>
          </SwiperSlide>
        })}
      </>
    </Swiper>
  );
};

export default MainSlider;