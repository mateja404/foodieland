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
      <Header />
      <div className="relative w-full h-full">
        <div className="relative w-[75%] h-[1003px] bg-white left-1/2 translate-x-[-50%] mt-20">
          <h1 className={`${interFont.className} text-[64px]`}>Health Japanese Fried Rice</h1>
          <div className="flex flex-row relative">
            <Image src={avatar} alt="avatar" className="mt-7" />
            <h3 className={`${interFont.className} absolute left-15 top-7`}>John Smith</h3>
            <p className={`${interFont.className} absolute left-15 top-13 text-[14px]`}>12 March 2022</p>
            <Separator orientation="vertical" className="absolute left-50 top-6 h-50" />
            <Timer className="absolute top-9 left-55 fill-black" />
            <h3 className={`${interFont.className} absolute left-65 top-7`}>PREP TIME</h3>
            <p className={`${interFont.className} absolute left-65 top-14 text-[14px]`}>15 Minutes</p>
            <Separator orientation="vertical" className="absolute left-95 top-6 h-50" />
            <Timer className="absolute top-9 left-100 fill-black" />
            <h3 className={`${interFont.className} absolute left-110 top-7`}>COOK TIME</h3>
            <p className={`${interFont.className} absolute left-110 top-14 text-[14px]`}>15 Minutes</p>
            <Separator orientation="vertical" className="absolute left-140 top-6 h-50" />
            <Utensils className="absolute top-9 left-150 fill-black" />
            <p className={`${interFont.className} absolute left-160 top-9 text-[14px]`}>Chicken</p>
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
            </div>
            <div className="flex-1">
              <OtherRecipes />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipes;