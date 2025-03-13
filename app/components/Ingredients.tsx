"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { Inter } from "next/font/google"

const interFont = Inter({
  subsets: ["latin"],
  weight: "400",
});

interface Ingredient {
  ingredient: string;
  description: string;
}

interface IngredientsListProps {
  ingredients?: Ingredient[]
  sauce?: Ingredient[]
}

export default function IngredientsList({ ingredients = [], sauce = [] }: IngredientsListProps) {
  const [checkedIngredients, setCheckedIngredients] = useState<boolean[]>(new Array(ingredients.length).fill(false))
  const [checkedSauce, setCheckedSauce] = useState<boolean[]>(new Array(sauce.length).fill(false))

  const toggleIngredient = (index: number) => {
    const updatedCheckedItems = [...checkedIngredients]
    updatedCheckedItems[index] = !updatedCheckedItems[index]
    setCheckedIngredients(updatedCheckedItems)
  }

  const toggleSauce = (index: number) => {
    const updatedCheckedItems = [...checkedSauce]
    updatedCheckedItems[index] = !updatedCheckedItems[index]
    setCheckedSauce(updatedCheckedItems)
  }

  return (
    <div className="relative mt-20 max-sm:mt-150 w-full">
      <div className="absolute w-full h-full left-0">
        <h1 className={`${interFont.className} text-[36px]`}>Ingredients</h1>
        {ingredients.length > 0 && (
          <div className="flex absolute left-0 flex-col">
            <h3 className={`${interFont.className} text-[24px] mt-10`}>For main dish</h3>
            <div className="mt-5 flex flex-col space-y-2 gap-4">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center gap-2 text-[20px]">
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      checkedIngredients[index] ? "border-primary bg-primary text-primary-foreground" : "border-primary"
                    } cursor-pointer`}
                    onClick={() => toggleIngredient(index)}
                    role="checkbox"
                    aria-checked={checkedIngredients[index]}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        toggleIngredient(index)
                      }
                    }}
                  >
                    {checkedIngredients[index] && <Check className="h-3.5 w-3.5" />}
                  </div>
                  <span className={`${checkedIngredients[index] ? "line-through text-muted-foreground text-nowrap" : "text-nowrap"}`}>
                    {ingredient.ingredient}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {sauce.length > 0 && (
          <div className="absolute top-80">
            <h3 className={`${interFont.className} text-[24px] mt-10`}>For the sauce</h3>
            <div className="mt-5 flex flex-col space-y-2 gap-4">
              {sauce.map((item, index) => (
                <div key={index} className="flex items-center gap-2 text-[20px]">
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
                      checkedSauce[index] ? "border-primary bg-primary text-primary-foreground" : "border-primary"
                    } cursor-pointer`}
                    onClick={() => toggleSauce(index)}
                    role="checkbox"
                    aria-checked={checkedSauce[index]}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault()
                        toggleSauce(index)
                      }
                    }}
                  >
                    {checkedSauce[index] && <Check className="h-3.5 w-3.5" />}
                  </div>
                  <span className={`${checkedSauce[index] ? "line-through text-muted-foreground flex text-nowrap" : "text-nowrap flex"}`}>{item.ingredient}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}