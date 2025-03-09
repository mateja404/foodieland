import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import inboxsalad from "../../public/inboxsalad.png";
import inboxsaladright from "../../public/inboxsaladright.png";
import trava from "../../public/trava.png";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const Inbox = () => {
  return (
    <>
      <div className='flex align-center justify-center mt-80 max-md:mt-570 md:mt-240 lg:mt-140 xl:mt-70'>
        <div className='relative w-[1280px] h-[442px] bg-[#E7F9FD] rounded-[50px] text-center'>
          <h1 className={`absolute top-20 left-1/2 translate-x-[-50%] ${interFont.className} text-[48px] max-md:text-nowrap max-md:text-[38px] md:text-nowrap max-sm:text-[30px] max-sm`}>Deliciousness to your inbox</h1>
          <p className={`absolute top-45 left-1/2 translate-x-[-50%] ${interFont.className} max-md:top-40 max-sm:text-[0.9rem] max-sm:top-35`}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
          <Image src={inboxsalad} alt='inboxsalad' className='absolute bottom-0 left-0 max-md:w-[200px] max-md:h-[200px] md:w-[250px] md:h-[250px] xl:w-[320px] xl:h-[320px] max-sm:w-[150px] max-sm:h-[150px]' />
          <Image src={inboxsaladright} alt='inboxsaladright' className='absolute bottom-0 right-0 max-md:w-[120px] max-md:h-[120px] md:w-[180px] md:h-[180px] xl:w-[220px] xl:h-[220px] max-sm:w-[150px] max-sm:h-[150px]' />
          <Image src={trava} alt='trava' className='absolute bottom-20 right-60 max-md:hidden md:hidden' />
          <div className='flex flex-row absolute bottom-10 left-1/2 -translate-x-1/2 w-fit max-md:bottom-20 md:bottom-20 z-10 max-sm:bottom-20'>
            <div className='relative'>
              <input
                type='email'
                placeholder='Your email address...'
                className='rounded-2xl pt-7 pb-7 pl-8 pr-32 bg-white w-full max-md:w-[350px] lg:w-[400px] xl:w-[450px]'
                aria-label='Enter your email address'
              />
              <button className='pt-5 pb-5 pl-10 pr-10 bg-black text-white absolute top-2 right-0 rounded-2xl hover:cursor-pointer' aria-label='Subscribe to our newsletter'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Inbox;