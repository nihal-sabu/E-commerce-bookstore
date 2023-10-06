import React from 'react';
import {FaYoutube, FaInstagram, FaFacebook, FaPinterest} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='pt-6 bg-primary'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>Subscribe to our newsletter</h2>
          <p className='text-white/70'>
            Be the first to get the latest updates,news and much more!
          </p>
        </div>

        <form className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-10'>
          <input 
            type="text"
            placeholder='Your email address'
            className='input' />
            <button className='btn btn-accent min-w-[150px]'>Join</button>
        </form>
        
        <div className='text-bae text-white/60 flex gap-x-6 max-w-max mx-auto mb-9'>
          <a href="#" className='hover:text-white transition-all '>Return policy</a>
          <a href="#" className='hover:text-white transition-all '>Track your Order</a>
          <a href="#" className='hover:text-white transition-all '>Shipping and Delivery</a>
        </div>

        <div className='flex gap-x-6 max-w-max mx-auto mb-8 text-3xl '>
          <a href="#" className='hover:bg-accent transition-all '>
            <FaYoutube/>
          </a>
          <a href="#" className='hover:bg-accent transition-all '>
            <FaFacebook/>
          </a>
          <a href="#" className='hover:bg-accent transition-all '>
            <FaInstagram/>
          </a>
          <a href="#" className='hover:bg-accent transition-all '>
            <FaPinterest/>
          </a>
        </div>
      </div>

      <div className='py-10 border-t border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white/60'>
            Copyright &copy; BookWorld 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;
