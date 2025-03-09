import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Timer, Utensils } from 'lucide-react';
import badge from "../../public/badge.png";
import chickenpic from "../../public/chickenpic.png";
import heroavatar from "../../public/heroavatar.png";
import hotrecipes_pic from "../../public/heropic.png";
import playbtn from "../../public/playbtn.png";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const Hero = () => {
  return (
    <>
        <div className='flex justify-center items-center'>
            <div className='bg-[#E6F9FD] w-[80vw] h-[75vh] mt-10 rounded-[50px] relative max-md:w-full md:w-[95vw] max-sm:w-[100vw] max-sm:mx-auto max-sm:h-[90vh]'>
                <div className='absolute left-15 top-5 bg-white flex items-center pt-2 pb-2 pl-6 pr-6 rounded-[50px] max-sm:left-2'>
                    <Image className='translate-x-[-10px]' src={hotrecipes_pic} alt='hotrecipes_pic' />
                    <span className={`font-semibold ${interFont.className}`}>Hot Recipes</span>
                </div>
                <h1 className={`absolute left-10 top-[15%] text-[5vw] font-bold ${interFont.className} text-[64px]`}>Spicy delicious <br/> chicken wings</h1>
                <p className='absolute left-55 top-[45%] text-[1rem] lg:max-w-[400px] max-sm:max-w-[330px] max-sm:top-[35%] xl:top-[30%]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className='absolute left-5 top-[45%] pt-2 pb-2 pl-6 pr-6 bg-[#DBEEF1] rounded-[50px]'>
                    <span className={`flex ${interFont.className} text-[14px]`}><Timer className='translate-x-[-15px]' />30 Minutes</span>
                </div>
                <div className='absolute left-50% top-[40%] pt-2 pb-2 pl-6 pr-6 bg-[#DBEEF1] rounded-[50px]'>
                    <span className={`flex ${interFont.className} text-[14px]`}><Utensils className='translate-x-[-15px]' />Chicken</span>
                </div>
                <Image className='absolute left-5 bottom-5 max-md:left-5 max-md:top-135 lg:left-7 max-sm:top-[15%]' src={heroavatar} alt='heroavatar'/>
                <h1 className={`absolute left-[5%] bottom-10 font-extrabold ${interFont.className} text-black`}>John Smith</h1>
                <p className='absolute left-[5%] bottom-5 text-[#5C6466] font-semibold'>15 March 2022</p>
                <button className='absolute bottom-5 bg-black pt-4 pb-4 pl-12 pr-12 left-[40%] rounded-2xl text-white flex hover:cursor-pointer max-md:left-50% max-md:bottom-5 max-sm:left-5 max-md:pl-6 max-md:pr-6'>
                    View Recipes <Image src={playbtn} alt='playbtn' className='translate-x-2 translate-y-1 w-5 h-5' />
                </button>
                <div className='w-[40vw] bg-black h-full absolute right-0 rounded-[50px] max-md:hidden lg:flex'>
                    <div className='relative bg-transparent w-full h-full rounded-[50px]'>
                        <Image src={badge} alt='badge' className='absolute top-5 left-1/2 z-10 transform -translate-x-1/2' />
                        <Image src={chickenpic} alt='chickenpic' className='absolute right-0 top-0 w-full h-full'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero;