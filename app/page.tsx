import { Metadata } from "next";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import SuperHotRecipes from "./components/SuperHotRecipes";
import Chief from "./components/Chief";
import CheckOut from "./components/CheckOut";
import DeliciousRecipes from "./components/DeliciousRecipes";
import Inbox from "./components/Inbox";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Foodieland | Home",
  description: "Foodieland | Best place to find super hot recipes",
  keywords: ""
};

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Categories/>
      <SuperHotRecipes/>
      <Chief/>
      <CheckOut/>
      <DeliciousRecipes/>
      <Inbox/>
      <Footer/>
    </>
  );
}