import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import fruitsalad from "../../public/fruitsalad.png";
import beef from "../../public/beef.png";
import asparagus from "../../public/asparagus.png";
import taco from "../../public/taco.png";
import honey from "../../public/honey.png";
import sandwiches from "../../public/sandwiches.png";
import wraps from "../../public/wraps.png";
import soup from "../../public/soup.png";
import { Timer, Utensils } from 'lucide-react';

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const DeliciousRecipes = () => {
  return (
    <>
        <div className='flex align-center justify-center'>
            <div className='relative w-[90%] h-[868px] mt-40'>
                <h1 className={`absolute left-20 ${interFont.className} text-[48px] lg:text-[42px] max-sm:left-0 max-md:left-10 max-md:text-[30px] lg:left-10`}>Try this delicious recipe <br/> to make your day</h1>
                <p className={`absolute right-20 top-7 ${interFont.className} text-[16px] lg:text-[14px] lg:right-10 md:left-20 md:top-40 max-md:top-30 max-sm:left-0 max-md:left-10`}>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor <br/> incididunt ut labore et dolore magna aliqut enim ad minim </p>
                <div className='grid grid-cols-4 place-items-center gap-y-8 mt-50 max-md:grid-cols-1 max-md:mt-70 md:mt-70 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={fruitsalad} alt='fruitsalad' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Mixed Tropical Fruit Salad with <br/> Superfood Boosts</h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={beef} alt='beef' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Big and Juicy Wagyu Beef <br/> Cheeseburger</h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={asparagus} alt='asparagus' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Healthy Japanese Fried Rice with <br/> Asparagus</h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={taco} alt='taco' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Cauliflower Walnut Vegetarian Taco <br/> Meat</h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={honey} alt='honey' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Rainbow Chicken Salad with <br/> Almond Honey Mustard Dressing</h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={sandwiches} alt='sandwiches' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Barbeque Spicy Sandwiches with <br/> Chips </h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={wraps} alt='wraps' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Firecracker Vegan Lettuce Wraps- <br/> Spicy! </h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                    <div className='relative w-[290px] h-[316px] bg-white'>
                        <Image src={soup} alt='soup' className='mx-auto translate-y-[0.5rem] rounded-3xl' />
                        <h1 className='absolute text-black text-[18px] left-5 top-55'>Chicken Ramen Soup with <br/> Mushroom</h1>
                        <p className={`${interFont.className} flex absolute bottom-1 left-5`}><Timer className='w-[23px]'/> 30 Minutes</p>
                        <p className={`${interFont.className} flex absolute bottom-1 left-38`}><Utensils className='w-[23px]'/> <span className={`${interFont.className} ml-[5px]`}>Snack</span></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default DeliciousRecipes;