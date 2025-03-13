"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { Inter } from "next/font/google";
import { Separator } from "@/components/ui/separator";

const interFont = Inter({
  subsets: ["latin"],
  weight: "400",
});

interface IngredientsListProps {
  ingredientsWithDescription: { ingredient: string; description: string }[];
}

const Directions = ({ ingredientsWithDescription = [] }: IngredientsListProps) => {
  if (!Array.isArray(ingredientsWithDescription)) {
    console.error("ingredientsWithDescription should be an array");
    return null;
  }

  const [checkedIngredients, setCheckedIngredients] = useState<boolean[]>(
    new Array(ingredientsWithDescription.length).fill(false)
  );

  const toggleIngredient = (index: number) => {
    const updatedCheckedItems = [...checkedIngredients];
    updatedCheckedItems[index] = !updatedCheckedItems[index];
    setCheckedIngredients(updatedCheckedItems);
  };

  return (
    <div className="relative left-0 w-full">
      <div className="mt-20 flex flex-col items-center gap-8 absolute left-0 top-140">
        <h1 className={`${interFont.className} text-[36px] font-semibold absolute left-0`}>Directions</h1>

        <div className="flex flex-col space-y-4 w-full max-w-xl mt-20 text-start">
          {ingredientsWithDescription.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 w-full"
            >
              <div className="flex items-center gap-2 text-[24px]">
                {/* Checkbox */}
                <div
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                    checkedIngredients[index]
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-primary"
                  } cursor-pointer`}
                  onClick={() => toggleIngredient(index)}
                  role="checkbox"
                  aria-checked={checkedIngredients[index]}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      toggleIngredient(index);
                    }
                  }}
                >
                  {checkedIngredients[index] && <Check className="h-3.5 w-3.5" />}
                </div>
                <span
                  className={`${
                    checkedIngredients[index] ? "line-through text-muted-foreground" : ""
                  }`}
                >
                  {item.ingredient}
                </span>
              </div>
              <p className={`${interFont.className} text-[18px] text-gray-700 mt-2`}>
                {item.description}
              </p>
              <Separator orientation="horizontal" className="w-[35vw] mt-10 mb-10" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Directions;