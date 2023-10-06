import React from 'react';

import CategoryNav from '../components/CategoryNav';
import MainSlider from '../components/MainSlider';
import img5 from '../img/img5.png'


const Hero = () => {
  return (
    <section className='mb-[30px] pt-36 lg:pt-0'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]'>

          <div>
            <CategoryNav />
          </div>

          <div className='w-full max-w-lg lg:max-w-[734px] mx-auto'>
            <MainSlider />
          </div>

          <div className='flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]'>
            {/* promo1 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                  Save 30% Off on science fiction books!
                </div>
                <a href="#" className='uppercase text-accent'>
                  Shop Now
                </a>
              </div>
              <img className='absolute z-20 top-16 -right-4 w-[200px] h-[200px]' 
                src={img5} alt="" />
            </div>
            {/* promo2 */}
            <div className='grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6'>
              <div className='flex flex-col max-w-[144px] h-full justify-center'>
                <div className='text-[20px] uppercase font-medium leading-tight mb-4'>
                  Save 25% Off biographies
                </div>
                <a href="#" className='uppercase text-accent'>
                  Shop Now
                </a>
              </div>
              <img className='absolute z-20 top-16 -right-4 w-[200px] h-[200px]' 
                src={img5} alt="" />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
};

export default Hero;
