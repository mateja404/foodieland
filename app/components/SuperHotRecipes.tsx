import React from 'react';
import { Inter } from 'next/font/google';

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const SuperHotRecipes = () => {
  return (
    <>
        <div className='flex justify-center align-center'>
            <div className='relative w-[95vw] h-[324px] mt-40'>
                <h1 className={`text-black absolute text-[48px] left-1/2 translate-x-[-50%] ${interFont.className}`}>Simple and tasty recipes</h1>
                <p className={`text-black absolute  ${interFont.className}`}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
        </div>
    </>
  )
}

export default SuperHotRecipes;