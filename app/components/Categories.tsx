import { Inter } from 'next/font/google';
import React from 'react';

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const Categories = () => {
  return (
    <>
        <div className='flex align-center justify-center'>
            <div className='relative w-[95vw] h-[324px] mt-40'>
                <h1 className={`text-black font-extrabold text-[48px] ${interFont.className} left-0`}>Categories</h1>
            </div>
        </div>
    </>
  )
}

export default Categories;