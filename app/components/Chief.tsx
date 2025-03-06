import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import chief from "../../public/kuhar.png";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const Chief = () => {
  return (
    <>
        <div className='flex align-center justify-center'>
            <div className='relative w-full h-[597px] mt-50'>
                <div className='relative h-full w-[50vw] flex'>
                    <h1 className={`absolute left-10 top-35 text-black text-[48px] ${interFont.className}`}>Everyone can be a <br/> chef in their own kitchen</h1>
                    <p className={`absolute left-10 top-80 text-[1rem] ${interFont.className}`}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br/> eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br/> ad minim </p>
                    <button className={`absolute bottom-15 bg-black pt-[18px] pb-[18px] pl-[55px] pr-[55px] left-10 rounded-2xl text-white flex hover:cursor-pointer`}>Learn More</button>
                </div>
                <div className='absolute top-0 right-0 h-full w-[50vw] flex'>
                    <div className='relative w-full align-center justify-center flex'>
                        <Image src={chief} alt='chief' className='absolute' />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Chief;