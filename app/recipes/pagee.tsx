import React from 'react';
import { Metadata } from 'next';
import Header from '../components/Header';
import { Inter } from 'next/font/google';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import avatar from "../../public/heroavatar.png";
import friedrice from "../../public/friedrice.png";
import { Timer, Utensils, Printer, Share } from 'lucide-react';
import NutritionInformation from '../components/NutritionInformation';
import OtherRecipes from '../components/OtherRecipes';
import IngredientsList from '../components/Ingredients';
import Directions from '../components/Directions';
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
  const ingredientsWithDescription = [
    { ingredient: "1. Lorem ipsum dolor sit amet", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
    { ingredient: "2. Lorem ipsum dolor sit amet", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." },
    { ingredient: "3. Lorem ipsum dolor sit amet", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem." }
  ];
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
              "Chicken"
            </div>
          </div>
          <div className="absolute top-14 right-25">
            <button className="bg-blue-300/30 w-[70px] h-[70px] flex justify-center rounded-[50%] hover:cursor-pointer">
              <Printer className="absolute top-1/2 translate-y-[-50%]" />
            </button>
            <p className={`${interFont.className} absolute left-5 top-21 text-[12px]`}>PRINT</p>
          </div>
          <div className="absolute top-14 right-0">
            <button className="bg-blue-300/30 w-[70px] h-[70px] flex justify-center rounded-[50%] hover:cursor-pointer">
              <Share className="absolute top-1/2 translate-y-[-50%]" />
            </button>
            <p className={`${interFont.className} absolute left-5 top-21 text-[12px]`}>SHARE</p>
          </div>
          <Image src={friedrice} alt="fried rice" className="mt-20" />
          <NutritionInformation />
          <p className={`${interFont.className} text-start absolute bottom-0 text-black/60`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="mt-60 flex flex-col lg:flex-row gap-10">
            <div className="flex-1">
              <IngredientsList ingredients={[
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
                "Lorem ipsum dolor sit amet",
              ]}
                sauce={["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"]} />
              <Directions ingredientsWithDescription={ingredientsWithDescription} />
            </div>
            <div className="flex-1">
              <OtherRecipes />
            </div>
          </div>
          <div className='mt-290'>
            <Inbox/>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default Recipes;