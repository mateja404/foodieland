import React from 'react';
import { Inter } from 'next/font/google';
import meatballs from "../../public/meatballs.png";
import pasta from "../../public/pasta.png";
import rice from "../../public/rice.png";
import Image from 'next/image';
import Link from 'next/link';

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const OtherRecipes = () => {
  return (
    <>
        <div className='flex absolute right-0 bg-white w-[400px] h-[479px]'>
            <h1 className={`${interFont.className} text-black text-[32px] flex`}>Other Recipe</h1>
            <div className='absolute w-full h-[120px] mt-20 bg-white'>
                <Image src={meatballs} alt='meat balls recipe' className='w-[180px] h-[120px] absolute left-0 top-0' />
                <Link href="/recipe" className={`${interFont.className} absolute right-0 text-[20px]`}>Chicken Meatball <br/> with Creamy Chees...</Link>
                <p className={`${interFont.className} absolute bottom-0 left-1/2 text-black/50 text-[14px]`}>By Andreas Paula</p>
            </div>
            <div className='absolute w-full h-[120px] mt-65 bg-white'>
                <Image src={pasta} alt='pasta rice recipe' className='w-[180px] h-[120px] absolute left-0 top-0' />
                <Link href="/recipe" className={`${interFont.className} absolute right-0 text-[20px]`}>The Creamiest <br/> Creamy Chicken an...</Link>
                <p className={`${interFont.className} absolute bottom-0 left-1/2 text-black/50 text-[14px]`}>By Andreas Paula</p>
            </div>
            <div className='absolute w-full h-[120px] mt-110 bg-white'>
                <Image src={rice} alt='rice recipe' className='w-[180px] h-[120px] absolute left-0 top-0' />
                <Link href="/recipe" className={`${interFont.className} absolute right-0 text-[20px]`}>The Best Easy One <br/> Pot Chicken and Rice.</Link>
                <p className={`${interFont.className} absolute bottom-0 left-1/2 text-black/50 text-[14px]`}>By Andreas Paula</p>
            </div>
        </div>
    </>
  )
}

export default OtherRecipes;