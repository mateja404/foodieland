import React from 'react';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import chief from "../../public/kuhar.png";
import meat from "../../public/meat.png";
import vegan from "../../public/vegan.png";
import onion from "../../public/onion.png";
import tomato from "../../public/tomato.png";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const Chief = () => {
  return (
    <>
        <div className="flex items-center justify-center w-full overflow-x-hidden">
            <div className="relative w-full h-[597px] mt-50 max-md:mt-750 md:mt-260 2xl:mt-40 xl:mt-40 lg:mt-40 max-sm:h-[550px] 2xl:h-[597px] max-sm:bg-gradient-to-t max-sm:from-blue-300/30 max-sm:via-blue-400/30 md:bg-gradient-to-t md:from-blue-300/30 md:via-blue-400/30">
                <div className="relative h-full w-full flex justify-center items-center xl:w-[40vw] md:w-[95vw]">
                    <h1 className={`absolute left-10 top-35 text-black text-[48px] ${interFont.className} max-md:max-w-[500px] max-sm:text-[30px] max-sm:text-nowrap max-md:left-5 md:text-nowrap md:text-[30px] xl:text-[68px] 2xl:text-[68px]`}>
                        Everyone can be a <br /> chef in their own kitchen
                    </h1>
                    <p className={`absolute left-0 right-0 top-[90px] text-[1rem] max-sm:left-[0rem] max-sm:translate-x-3 sm:left-20 max-sm:text-[14px] max-md:top-80 lg:left-6 lg:max-w-[400px] max-sm:max-w-[400px] max-sm:top-60 md:top-70 md:left-10 xl:top-75 xl:left-15 w-full break-words 2xl:top-90 2xl:left-15`}>
                        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do <br /> eiusmod tempor incididunt ut labore et dolore magna aliqut enim <br /> ad minim
                    </p>
                    <button className={`absolute z-10 bottom-15 bg-black pt-[18px] pb-[18px] pl-[55px] pr-[55px] left-10 rounded-2xl text-white flex hover:cursor-pointer text-nowrap max-sm:bottom-30 max-sm:left-5 md:bottom-25 2xl:bottom-5`}>
                        Learn More
                    </button>
                </div>
                <div className="absolute top-0 right-0 h-full w-full flex max-md:hidden xl:w-[50vw]">
                    <div className="relative w-full flex justify-center items-center bg-gradient-to-t from-blue-300/30 rounded-[20px] md:flex lg:flex xl:flex 2xl:flex">
                        <Image src={chief} alt="chief" className="absolute bottom-0 md:right-0" width={500} height={500}/>
                        <Image src={vegan} alt="vegan" className="absolute top-30 right-5 md:hidden lg:top-105 lg:right-2" />
                        <Image src={meat} alt="meat" className="absolute left-37 md:hidden lg:left-10" />
                        <Image src={tomato} alt="tomato" className="absolute bottom-30 -left-5 md:hidden" />
                        <Image src={onion} alt="onion" className="absolute right-55 top-20 md:hidden xl:right-30 xl:top-10 lg:right-10 lg:top-10" />
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Chief;
