import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { Timer, Utensils } from 'lucide-react';
import cheeseburger from "../../public/cheeseburger.png";
import salmon from "../../public/salmon.png";
import pancake from "../../public/pancake.png";
import salad from "../../public/salad.png";
import meatballs from "../../public/meatballs.png";
import dontforget from "../../public/dontforget.png";
import blueberry from "../../public/blueberry.png";
import rice from "../../public/rice.png";
import pasta from "../../public/pasta.png";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const SuperHotRecipes = () => {
  return (
    <>
        <div className='flex justify-center align-center'>
            <div className='relative w-[95vw] h-[324px] mb-40 max-md:mt-380'>
                <h1 className={`text-black absolute text-[48px] left-1/2 translate-x-[-50%] ${interFont.className} max-md:text-[30px] text-nowrap`}>Simple and tasty recipes</h1>
                <p className={`text-black absolute top-25 left-1/2 translate-x-[-50%] text-center ${interFont.className}`}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='relative grid grid-cols-3 mt-60 gap-30 place-items-center'>
                    <div className='relative w-[400px] h-[434px] bg-gradient-to-t from-blue-300/30 rounded-[35px]'>
                        <Image src={cheeseburger} alt='cheeseburger' className='mx-auto translate-y-[0.5rem]' />
                        <h1 className='absolute text-black text-[24px] left-5 top-70'>Big and Juicy Wagyu Beef <br/> Cheeseburger</h1>
                        <p className={`${interFont.className} flex absolute bottom-10 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-10 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[400px] h-[434px] bg-gradient-to-t from-blue-300/30 rounded-[35px]'>
                        <Image src={salmon} alt='cheeseburger' className='mx-auto translate-y-[0.5rem]' />
                        <h1 className='absolute text-black text-[24px] left-5 top-70'>Fresh Lime Roasted Salmon with <br/> Ginger Sauce</h1>
                        <p className={`${interFont.className} flex absolute bottom-10 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-10 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Fish</span></p>
                    </div>
                    <div className='relative w-[400px] h-[434px] bg-gradient-to-t from-blue-300/30 rounded-[35px]'>
                        <Image src={pancake} alt='cheeseburger' className='mx-auto translate-y-[0.5rem]' />
                        <h1 className='absolute text-black text-[24px] left-5 top-70'>Strawberry Oatmeal Pancake <br/> with Honey Syrup</h1>
                        <p className={`${interFont.className} flex absolute bottom-10 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-10 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Breakfast</span></p>
                    </div>
                    <div className='relative w-[400px] h-[434px] bg-gradient-to-t from-blue-300/30 rounded-[35px]'>
                        <Image src={pancake} alt='cheeseburger' className='mx-auto translate-y-[0.5rem]' />
                        <h1 className='absolute text-black text-[24px] left-5 top-70'>Strawberry Oatmeal Pancake <br/> with Honey Syrup</h1>
                        <p className={`${interFont.className} flex absolute bottom-10 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-10 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Breakfast</span></p>
                    </div>
                    <div className='relative w-[400px] h-[434px] bg-gradient-to-t from-blue-300/30 rounded-[35px]'>
                        <Image src={pancake} alt='cheeseburger' className='mx-auto translate-y-[0.5rem]' />
                        <h1 className='absolute text-black text-[24px] left-5 top-70'>Strawberry Oatmeal Pancake <br/> with Honey Syrup</h1>
                        <p className={`${interFont.className} flex absolute bottom-10 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-10 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Breakfast</span></p>
                    </div>
                    <div className='relative w-[400px] h-[434px] bg-gradient-to-t from-blue-300/30 rounded-[35px]'>
                        <Image src={pancake} alt='cheeseburger' className='mx-auto translate-y-[0.5rem]' />
                        <h1 className='absolute text-black text-[24px] left-5 top-70'>Strawberry Oatmeal Pancake <br/> with Honey Syrup</h1>
                        <p className={`${interFont.className} flex absolute bottom-10 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-10 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Breakfast</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default SuperHotRecipes;