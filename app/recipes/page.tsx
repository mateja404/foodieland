import React from 'react';
import { Metadata } from 'next';
import Header from '../components/Header';
import { Inter } from 'next/font/google';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import avatar from "../../public/heroavatar.png";
import { Timer, Utensils } from 'lucide-react';

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
      <Header/>
      <div className='relative w-full h-full'>
        <div className='relative w-[1280px] h-[1003px] bg-white left-1/2 translate-x-[-50%] mt-20'>
          <h1 className={`${interFont.className} text-[64px]`}>Health Japanese Fried Rice</h1>
          <div className='flex flex-row relative'>
            <Image src={avatar} alt='avatar' className='mt-7' />
            <h3 className={`${interFont.className} absolute left-15 top-7`}>John Smith</h3>
            <p className={`${interFont.className} absolute left-15 top-13 text-[14px]`}>12 March 2022</p>
            <Separator orientation='vertical' className='absolute left-50 top-6 h-50' />
            <Timer className='absolute top-9 left-55 fill-black'/>
            <h3 className={`${interFont.className} absolute left-65 top-7`}>PREP TIME</h3>
            <p className={`${interFont.className} absolute left-65 top-14 text-[14px]`}>15 Minutes</p>
            <Separator orientation='vertical' className='absolute left-95 top-6 h-50' />
            <Timer className='absolute top-9 left-100 fill-black'/>
            <h3 className={`${interFont.className} absolute left-110 top-7`}>COOK TIME</h3>
            <p className={`${interFont.className} absolute left-110 top-14 text-[14px]`}>15 Minutes</p>
            <Separator orientation='vertical' className='absolute left-140 top-6 h-50' />
            <Utensils className='absolute top-9 left-150 fill-black'/>
            <p className={`${interFont.className} absolute left-160 top-9 text-[14px]`}>Chicken</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recipes;