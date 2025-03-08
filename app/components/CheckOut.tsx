import React from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import post1 from "../../public/post1.png";
import post2 from "../../public/post2.png";
import post3 from "../../public/post3.png";
import post4 from "../../public/post4.png";
import { Instagram } from 'lucide-react';

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const CheckOut = () => {
  return (
    <>
        <div className='flex align-center justify-center w-full overflow-x-hidden mt-40'>
            <div className='relative w-full h-[964px] bg-gradient-to-t from-blue-300/30 via-blue-400/30 text-center max-md:h-full max-sm:h-[2600px] sm:h-[2480px] lg:h-full 2xl:h-[964px]'>
                <h1 className={`text-black text-[48px] mt-40 ${interFont.className}`}>Check out @foodieland on Instagram</h1>
                <p className={`mt-5 ${interFont.className}`}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore <br/> magna aliqut enim ad minim </p>
                <div className='grid grid-cols-4 place-items-center mt-25 sm:gap-8 md:grid-cols-2 max-md:grid-cols-1 md:gap-8 lg:grid-cols-4 max-sm:gap-10'>
                    <Image src={post1} alt='post1' />
                    <Image src={post2} alt='post2' />
                    <Image src={post3} alt='post3' />
                    <Image src={post4} alt='post4' />
                <button className={`absolute bottom-0 bg-black pt-[18px] pb-[18px] pl-[55px] pr-[55px] left-1/2 translate-x-[-50%] rounded-2xl text-white flex hover:cursor-pointer text-nowrap max-sm:bottom-0 md:bottom-25 2xl:bottom-5`}>
                        Visit Our Instagram <Instagram className='translate-x-[15px]'/>
                </button>
                <button></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default CheckOut;