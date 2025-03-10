import React from 'react';
import { Inter, Lobster } from 'next/font/google';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram } from "lucide-react";

const interFont = Inter({
    subsets: ["latin"],
    weight: "400"
});

const lobsterFont = Lobster({
    subsets: ["latin"],
    weight: "400"
});

const Footer = () => {
  return (
    <>
        <footer className='relative w-full h-[193px] mt-40 max-sm:h-[210px]'>
            <div className='absolute left-1/2 translate-x-[-50%] h-[50%] w-[90%] max-sm:text-center'>
                <h1 className={`${lobsterFont.className} text-[24px]`}>Foodieland</h1>
                <p className={`${interFont.className} mt-3 max-sm:mt-1 max-sm:text-[0.9rem]`}>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
                <ul className='inline-flex absolute top-2 right-20 gap-x-12 max-sm:left-1/2 max-sm:right-auto max-sm:translate-x-[-50%] max-sm:gap-x-8 max-sm:top-22'>
                    <li className={`${interFont.className}`}><Link href="/recipes" aria-label='Visit our Recipes page'>Recipes</Link></li>
                    <li className={`${interFont.className}`}><Link href="/blog" aria-label='Visit our Blog page'>Blog</Link></li>
                    <li className={`${interFont.className}`}><Link href="/contact" aria-label='Visit our Contact page'>Contact</Link></li>
                    <li className={`${interFont.className} text-nowrap`}><Link href="/about" aria-label='Visit our About Us page'>About us</Link></li>
                </ul>
            </div>
            <div className='absolute bottom-0 left-1/2 translate-x-[-50%] h-[50%] w-[90%] max-md:h-[70%]'>
                <Separator className='absolute top-0 bg-black/20 max-md:top-5 max-sm:top-15'/>
                <Link href="https://github.com/mateja404" className={`${interFont.className} text-center absolute top-10 left-1/2 translate-x-[-50%] max-sm:top-21 text-nowrap`}>&copy; 2025 coded by <span className='underline-offset-1 underline'>Mateja</span></Link>
                <ul className='absolute right-10 inline-flex gap-x-10 top-10 max-md:left-1/2 max-md:right-auto max-md:translate-x-[-50%] max-md:bottom-2 max-md:top-auto'>
                    <li><Link href="https://facebook.com" aria-label='Visit our Facebook page'><Facebook className='fill-black' /></Link></li>
                    <li><Link href="https://x.com" aria-label='Visit our Twitter page'><Twitter className='fill-black' /></Link></li>
                    <li><Link href="https://instagram.com" aria-label='Visit our Instagram page'><Instagram /></Link></li>
                </ul>
            </div>
        </footer>
    </>
  )
}

export default Footer;