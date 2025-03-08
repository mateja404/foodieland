import { Metadata } from "next";
import Header from "./components/Header";
import HomePage from "./components/Home";
import Categories from "./components/Categories";
import SuperHotRecipes from "./components/SuperHotRecipes";
import Chief from "./components/Chief";
import CheckOut from "./components/CheckOut";
import DeliciousRecipes from "./components/DeliciousRecipes";
import Inbox from "./components/Inbox";

export const metadata: Metadata = {
  title: "Foodieland | Home",
  description: "Foodieland | Best place to find super hot recipes",
  keywords: ""
};

export default function Home() {
  return (
    <>
      <Header/>
      <HomePage/>
      <Categories/>
      <SuperHotRecipes/>
      <Chief/>
      <CheckOut/>
      <DeliciousRecipes/>
      <Inbox/>
    </>
  );
}