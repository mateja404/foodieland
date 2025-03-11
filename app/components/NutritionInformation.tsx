import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Inter } from 'next/font/google';

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const NutritionInformation = ({  }) => {
  return (
    <>
        <div className='flex absolute top-65 right-0 bg-blue-300/30 w-[400px] h-[600px] rounded-[30px]'>
            <h1 className={`${interFont.className} text-[24px] absolute left-5 top-5`}>Nutrition Information</h1>
            <p className={`absolute left-5 top-17 text-[18px] ${interFont.className} text-black/50`}>Calories</p>
            <span className={`absolute top-17 right-5 text-[18px] ${interFont.className} text-black`}>219.9 kcal</span>
            <Separator orientation='horizontal' className='absolute top-27 bg-black/10'/>
            <p className={`absolute left-5 top-31 text-[18px] ${interFont.className} text-black/50`}>Total fat</p>
            <span className={`absolute top-31 right-5 text-[18px] ${interFont.className} text-black`}>10.7 g</span>
            <Separator orientation='horizontal' className='absolute top-41 bg-black/10'/>
            <p className={`absolute left-5 top-45 text-[18px] ${interFont.className} text-black/50`}>Protein</p>
            <span className={`absolute top-45 right-5 text-[18px] ${interFont.className} text-black`}>7.9 g</span>
            <Separator orientation='horizontal' className='absolute top-55 bg-black/10'/>
            <p className={`absolute left-5 top-60 text-[18px] ${interFont.className} text-black/50`}>Carbohydrate</p>
            <span className={`absolute top-60 right-5 text-[18px] ${interFont.className} text-black`}>22.3 g</span>
            <Separator orientation='horizontal' className='absolute top-70 bg-black/10'/>
            <p className={`absolute left-5 top-75 text-[18px] ${interFont.className} text-black/50`}>Cholesterol</p>
            <span className={`absolute top-75 right-5 text-[18px] ${interFont.className} text-black`}>37.4 mg</span>
            <Separator orientation='horizontal' className='absolute top-85 bg-black/10'/>
            <p className={`${interFont.className} absolute bottom-5 text-center w-[90%] left-1/2 translate-x-[-50%] text-black/50`}>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
        </div>
    </>
  )
}

export default NutritionInformation;