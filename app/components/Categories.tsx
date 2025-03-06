import { Inter } from 'next/font/google';
import React from 'react';
import Image from 'next/image';
import breakfast from "../../public/breakfast.png";
import vegan from "../../public/vegan.png";
import meat from "../../public/meat.png";
import lunch from "../../public/lunch.png";
import dessert from "../../public/dessert.png";
import chocolate from "../../public/chocolate.png";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const Categories = () => {
  return (
    <>
        <div className='flex align-center justify-center'>
            <div className='relative w-[95vw] h-[324px] mt-40'>
              <h1 className={`text-black text-[48px] left-0 ${interFont.className}`}>Categories</h1>
              <button className='absolute top-4 bg-[#E6F9FD] pt-[18px] pb-[18px] pl-[30px] pr-[30px] rounded-2xl right-0 hover:cursor-pointer max-md:top-16 max-md:left-0 max-md:w-[50%] max-sm:w-[60%] max-sm:top-19 text-nowrap'>View All Categories</button>
              <div className='flex flex-row gap-10 justify-center align-center max-md:flex-col max-md:mt-20'>
                <div className='relative flex flex-col bg-gradient-to-t from-stone-200 via-white to-white pt-20 pb-20 pl-7 pr-7 rounded-[25px] text-center w-full md:w-auto max-md:mx-auto max-md:w-[70vw]'>
                  <Image src={breakfast} alt='breakfast' className='max-md:mx-auto' />
                  <p className={`absolute bottom-7 left-1/2 translate-x-[-50%] text-[#000] ${interFont.className}`}>Breakfast</p>
                </div>
                <div className='relative flex flex-col bg-gradient-to-t from-green-100 via-white to-white pt-20 pb-20 pl-7 pr-7 rounded-[25px] text-center w-full md:w-auto max-md:mx-auto max-md:w-[70vw]'>
                  <Image src={vegan} alt='breakfast' className='w-[105px] h-[105px] translate-y-[15px] block translate-x-3 max-md:mx-auto' />
                  <p className={`absolute bottom-7 left-1/2 translate-x-[-50%] text-[#000] ${interFont.className}`}>Vegan</p>
                </div>
                <div className='relative flex flex-col bg-gradient-to-t from-red-100 via-white to-white pt-20 pb-20 pl-10 pr-10 rounded-[25px] text-center w-full md:w-auto max-md:mx-auto max-md:w-[70vw]'>
                  <Image src={meat} alt='breakfast' className='w-[85px] h-[85px] translate-y-[15px] block translate-x-0 max-md:mx-auto' />
                  <p className={`absolute bottom-7 left-1/2 translate-x-[-50%] text-[#000] ${interFont.className}`}>Meat</p>
                </div>
                <div className='relative flex flex-col bg-gradient-to-t from-orange-100 via-white to-white pt-20 pb-20 pl-10 pr-10 rounded-[25px] text-center w-full md:w-auto max-md:mx-auto max-md:w-[70vw]'>
                  <Image src={dessert} alt='breakfast' className='w-[85px] h-[85px] translate-y-[15px] block translate-x-0 max-md:mx-auto' />
                  <p className={`absolute bottom-7 left-1/2 translate-x-[-50%] text-[#000] ${interFont.className}`}>Dessert</p>
                </div>
                <div className='relative flex flex-col bg-gradient-to-t from-stone-200 via-white to-white pt-20 pb-20 pl-10 pr-10 rounded-[25px] text-center w-full md:w-auto max-md:mx-auto max-md:w-[70vw]'>
                  <Image src={lunch} alt='breakfast' className='w-[85px] h-[85px] translate-y-[15px] block translate-x-0 max-md:mx-auto' />
                  <p className={`absolute bottom-7 left-1/2 translate-x-[-50%] text-[#000] ${interFont.className}`}>Lunch</p>
                </div>
                <div className='relative flex flex-col bg-gradient-to-t from-stone-200 via-white to-white pt-20 pb-20 pl-10 pr-10 rounded-[25px] text-center w-full md:w-auto max-md:w-[70vw] max-md:mx-auto'>
                  <Image src={chocolate} alt='breakfast' className='w-[85px] h-[85px] translate-y-[15px] block translate-x-0 max-md:mx-auto' />
                  <p className={`absolute bottom-7 left-1/2 translate-x-[-50%] text-[#000] ${interFont.className}`}>Chocolate</p>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default Categories;