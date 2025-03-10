"use client";

import React, { useState } from 'react';
import { Lobster, Inter } from 'next/font/google';
import Link from 'next/link';
import { Facebook, Instagram, Menu, Twitter, X } from 'lucide-react';

const lobsterFont = Lobster({
    subsets: ["latin"],
    weight: "400"
});

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <>
        <header className='w-full h-[100px] bg-white border-b border-[#E4E6F1] relative left-0 flex flex-row align-center justify-center'>
            <h1 className={`absolute left-22 top-8 ${lobsterFont.className} text-[1.5rem] max-md:left-7 md:left-5 2xl:left-25 xl:left-25`}>Foodieland</h1>
            <ul className='inline-flex gap-12 absolute top-8 max-md:hidden md:top-10'>
                <li className={`${interFont.className}`}><Link href="/" className='text-[1rem]' aria-label='Visit home page'>Home</Link></li>
                <li className={`${interFont.className}`}><Link href="/recipes" className='text-[1rem]' aria-label='Visit recipes page'>Recipes</Link></li>
                <li className={`${interFont.className}`}><Link href="/blog" className='text-[1rem]' aria-label='Visit blog page'>Blog</Link></li>
                <li className={`${interFont.className}`}><Link href="/contact" className='text-[1rem]' aria-label='Visit contact page'>Contact</Link></li>
                <li className={`${interFont.className}`}><Link href="/about" className='text-[1rem]' aria-label='Visit about us page'>About us</Link></li>
            </ul>
            <ul className='absolute right-20 inline-flex top-8 gap-8 max-md:hidden md:right-3 md:top-10'>
                <li><Link href="https://facebook.com" aria-label='Visit our facebook'><Facebook className='fill-black' /></Link></li>
                <li><Link href="https://x.com" aria-label='Visit our twitter'><Twitter className='fill-black' /></Link></li>
                <li><Link href="https://instagram.com" aria-label='Visit our instagram'><Instagram /></Link></li>
            </ul>
            <Menu onClick={() => setIsSidebarOpen(prevState => !prevState)} className='hidden max-md:block absolute top-10 right-12' />
            <div className={`fixed top-0 right-0 w-full h-full bg-white z-50 transform -translate-x-full transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <ul>
                    <li className='absolute top-5 right-10' onClick={() => setIsSidebarOpen(prevState => !prevState)}><X className='' /></li>
                    <li className='absolute left-10 top-10'><Link href="/" className='text-xl' aria-label='Visit home page'>Home</Link></li>
                    <li className='absolute left-10 mt-7 top-10'><Link href="#" className='text-xl' aria-label='Visit recipes page'>Recipes</Link></li>
                    <li className='absolute left-10 mt-14 top-10'><Link href="#" className='text-xl' aria-label='Visit blog page'>Blog</Link></li>
                    <li className='absolute left-10 mt-21 top-10'><Link href="#" className='text-xl' aria-label='Visit contact page'>Contact</Link></li>
                    <li className='absolute left-10 mt-28 top-10'><Link href="#" className='text-xl' aria-label='Visit about us page'>About us</Link></li>
                </ul>
                <ul className='relative flex align-center justify-center mx-auto'>
                        <li className='fixed bottom-10 mr-30'><Link href="https://facebook.com" aria-label='Visit our facebook'><Facebook className='fill-black' /></Link></li>
                        <li className='fixed bottom-10'><Link href="https://x.com" aria-label='Visit our twitter'><Twitter className='fill-black' /></Link></li>
                        <li className='fixed bottom-10 ml-30'><Link href="https://instagram.com" aria-label='Visit our instagram'><Instagram /></Link></li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Header;