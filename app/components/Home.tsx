"use client";

import React from 'react';
import Image from 'next/image';
import hotrecipes_pic from "../../public/heropic.png";
import heroavatar from "../../public/heroavatar.png";
import playbtn from "../../public/playbtn.png";
import badge from "../../public/badge.png";
import chickenpic from "../../public/chickenpic.png";
import { Inter } from 'next/font/google';
import { Timer, Utensils } from 'lucide-react';

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const HomePage = () => {
  return (
    <div className='flex align-center justify-center'>
        <div className='bg-[#E6F9FD] w-[80vw] h-[75vh] mt-10 rounded-[50px] relative max-md:w-full md:w-[95vw] max-sm:w-[100vw] max-sm:mx-auto max-sm:h-[90vh]'>
            <div className='absolute left-20 top-20 bg-white flex align-center pt-[10px] pb-[10px] pl-[30px] pr-[30px] rounded-[50px] max-sm:left-5'><Image className='translate-x-[-10px]' src={hotrecipes_pic} alt='hotrecipes_pic' /><span className={`font-semibold ${interFont.className}`}>Hot Recipes</span></div>
            <h1 className={`absolute left-20 top-35 text-[64px] font-bold max-md:text-[47px] max-sm:left-5 lg:left-6 lg:text-[50px] ${interFont.className}`}>Spicy delicious <br/> chicken wings</h1>
            <p className='absolute left-20 top-90 text-[1rem] max-sm:left-7 max-md:top-80 lg:left-6 lg:max-w-[400px] max-sm:max-w-[330px] max-sm:top-70 xl:top-75'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className='absolute left-20 top-110 pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#DBEEF1] rounded-[50px] max-md:top-111 max-md:left-10 lg:left-6 lg:top-120 max-sm:top-98 max-sm:left-5 xl:top-100'>
                <span className={`flex ${interFont.className} text-[14px]`}><Timer className='translate-x-[-15px]' />30 Minutes</span>
            </div>
            <div className='absolute left-65 top-110 pt-[10px] pb-[10px] pl-[30px] pr-[30px] bg-[#DBEEF1] rounded-[50px] max-md:top-111 max-md:left-55 lg:left-50 lg:top-120 max-sm:top-98 max-sm:left-47 xl:top-100'>
                <span className={`flex ${interFont.className} text-[14px]`}><Utensils className='translate-x-[-15px]' />Chicken</span>
            </div>
            <Image className='absolute left-20 bottom-15 max-md:left-7 max-md:top-135 lg:left-7 max-sm:top-120' src={heroavatar} alt='heroavatar'/>
            <h1 className={`absolute left-37 bottom-20 font-extrabold ${interFont.className} text-black max-md:left-23 max-md:top-135 lg:left-23 max-sm:top-120`}>John Smith</h1>
            <p className='absolute left-37 bottom-14 text-[#5C6466] font-semibold max-md:left-23 max-md:top-142 lg:left-23 max-sm:top-126'>15 March 2022</p>
            <button className='absolute bottom-15 bg-black pt-[18px] pb-[18px] pl-[55px] pr-[55px] left-100 rounded-2xl text-white flex hover:cursor-pointer max-md:left-100 max-md:bottom-26 max-sm:left-7 max-md:pl-[25px] max-md:pr-[25px] md:left-110 lg:left-70 lg:bottom-13 lg:pl-[25px] lg:pr-[25px] max-sm:bottom-10'>View Recipes <Image src={playbtn} alt='playbtn' className='translate-x-[10px] translate-y-[2px] w-[20px] h-[20px]' /></button>
            <div className='w-[40vw] bg-black h-full absolute right-0 rounded-[50px] max-md:hidden md:hidden lg:flex lg:w-[55vw] xl:w-[40vw] 2xl:w-[44vw]'>
                <div className='relative bg-transparent w-full h-full rounded-[50px]'>
                <Image src={badge} alt='badge' className='absolute top-20 left-1/2 z-10 max-md:hidden md:hidden lg:flex lg:-left-16 2xl:-left-16' />
                    <Image src={chickenpic} alt='chickenpic' className='z-5 absolute right-0 top-0 w-full h-full md:hidden lg:flex lg:w-[55vw] xl:w-[50vw]' />
                    <p className='absolute left-0'></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomePage;