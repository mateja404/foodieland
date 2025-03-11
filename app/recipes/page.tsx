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
      <div className="relative w-full h-full">
        <div className="relative w-[75%] h-[1003px] bg-white left-1/2 translate-x-[-50%] mt-20">
          <h1 className={`${interFont.className} text-[64px]`}>Health Japanese Fried Rice</h1>
          <div className="flex justify-end lg:justify-start flex-wrap gap-6 sm:gap-2 md:gap-4 my-12 relative">
            <div className='basis-[44%] sm:basis-[23%] flex border-r border-gray-300 border-solid'>
              <div>
                <Image src={avatar} alt="avatar"/>
              </div>
              <div className='ml-2'>
                <span className='font-bold block text-xs md:text-sm xl:text-base'>Losmi King</span>
                <span className='carousel-gray-text-color text-2xs xl:text-xs  font-medium'>15 March 2022</span>
              </div>
            </div>
            <div className='basis-[44%] sm:basis-[23%] flex items-center sm:border-r border-gray-300 border-solid'>
              <span><Timer/></span>
              <div className='ml-2'>
                <span className="font-medium text-xs block">PREP TIME</span>
                <span className="text-sm font-medium text-secondary ">30 Minutes</span>
              </div>
            </div>
            <div className='basis-[44%] sm:basis-[23%] flex items-center border-r border-gray-300 border-solid pl-3 sm:pl-0'>
              <span><Timer/></span>
              <div className='ml-2'>
                <span className="font-medium text-xs block">COOK TIME</span>
                <span className="text-sm font-medium text-secondary ">30 Minutes</span> 
              </div>
            </div>
            <div className='basis-[44%] sm:basis-[23%] flex items-center text-sm md:text-base'>
              <span><Utensils/></span>
              <span>Chicken</span>
            </div>
          </div>
          <div className="basis-full lg:basis-[30%] flex flex-col justify-between absolute right-0 top-5 mr-22 max-md:top-210 max-md:left-1/2 max-md:translate-x-[-50%] max-md:ml-[-4rem]">
            <div className='text-center flex flex-col items-center'>
              <div className='bg-blue-300/30 rounded-[50%] w-[70px] h-[70px] flex items-center justify-center transition-all cursor-pointer'>
                <Printer/>
              </div>
              <span>PRINT</span>
            </div>
          </div>
          <div className="basis-full lg:basis-[30%] flex flex-col justify-between absolute right-0 top-5 max-md:top-210 max-md:left-1/2 max-md:translate-x-[-50%] max-md:ml-[2rem]">
            <div className='text-center flex flex-col items-center'>
              <div className='bg-blue-300/30 rounded-[50%] w-[70px] h-[70px] flex items-center justify-center transition-all cursor-pointer'>
                <Share/>
              </div>
              <span>SHARE</span>
            </div>
          </div>
          <Image src={friedrice} alt="fried rice" className="mt-20" />
        </div>
      </div>
    </>
  );
}

export default Recipes;