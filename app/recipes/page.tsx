import React from 'react';
import { Metadata } from 'next';
import Header from '../components/Header';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import avatar from "../../public/heroavatar.png";
import friedrice from "../../public/friedrice.png";
import { Timer, Utensils, Printer, Share } from 'lucide-react';
import NutritionInformation from '../components/NutritionInformation';
import Inbox from '../components/Inbox';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Foodieland | Recipes",
  description: "Foodieland | Check out our best recipes",
  keywords: ""
};

const interFont = Inter({
  subsets: ["latin"],
  weight: "400"
});

const Recipes = () => {
  return (
    <>
      <Header />
      <div className='w-11/12 sm:container mx-auto sm:px-4'>
        <section>
          <div className='w-11/12 xl:w-full mx-auto mt-20 flex flex-wrap gap-4 h-[100vh]'>
            <div className='basis-full lg:basis-[66%] bg-red-500 relative'>
              <div className='w-full h-[50vh] text-right 2xl:text-start max-sm:text-center sm:text-start max-sm:h-[150vh] max-md:h-[120vh] md:h-[125vh]'>
                <h1 className={`${interFont.className} text-6xl max-sm:text-4xl md:text-5xl xl:text-6xl`}>Healthy Japanese Fried Rice</h1>
                <div className='flex justify-end lg:justify-start flex-wrap gap-6 sm:gap-2 md:gap-4 my-12'>
                  <div className='basis-[44%] sm:basis-[23%] flex border-r border-gray-300 border-solid'>
                    <div>
                      <Image src={avatar} alt="avatar" className='mx-auto w-10 h-10 object-cover rounded-[50%]' />  
                    </div>
                      <div className='ml-2'>
                        <span className='block text-xs md:text-sm'>John Smith</span>
                        <span className='block text-xs'>15 March 2022</span>
                      </div>
                  </div>      
                  <div className='basis-[44%] sm:basis-[23%] flex items-center border-r border-gray-300 border-solid'>
                    <span><Timer/></span>
                    <div className='ml-2'>
                      <span className='text-xs block'>PREP TIME</span>
                      <span className='text-xs text-black/60 block'>30 Minutes</span>
                    </div>
                  </div>     
                  <div className='basis-[44%] sm:basis-[23%] flex items-center border-r border-gray-300 border-solid pl-3 sm:pl-0'>
                    <span><Timer/></span>
                    <div className='ml-2'>
                      <span className='text-xs block'>PREP TIME</span>
                      <span className='text-xs text-black/60 block'>30 Minutes</span>
                    </div>
                  </div>     
                  <div className='basis-[44%] sm:basis-[23%] flex items-center text-sm'>
                    <span><Utensils/></span>
                    Chicken
                  </div>
                  <Image src={friedrice} alt="fried rice" className='mx-auto mt-20 max-sm:mt-0 max-sm:w-[90vw] max-sm:h-auto max-md:w-90 max-md:mt-3 md:w-[65vw] md:mt-5 2xl:w-[40vw]' />   
                  <p className={`${interFont.className} mt-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
              </div>
            </div>
            <div className='basis-full  relative lg:basis-[30%] flex gap-40 flex-col justify-between lg:h-[100vh] 2xl:h-[100vh] max-md:h-[100vh] max-sm:h-[100vh] md:h-[100vh] max-md:mt-0 md:mt-0'>
              <div className='text-center'>
                <div className='w-[70px] h-[70px] bg-blue-300/30 rounded-[50%] absolute left-1/2 translate-x-[0%]'>
                  <div className='relative flex items-center justify-center translate-y-[100%]'>
                    <Printer/>
                  </div>
                </div>
              </div>
              <div className='w-[70px] h-[70px] bg-blue-300/30 rounded-[50%] absolute left-1/2 translate-x-[-110%]'>
                <div className='relative flex items-center justify-center translate-y-[100%]'>
                  <Printer/>
                </div>
              </div>
              <div className='flex justify-center items-center align-center absolute left-1/2 translate-x-[-50%] top-40 md:top-25 2xl:top-47'>
                <NutritionInformation/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Recipes;