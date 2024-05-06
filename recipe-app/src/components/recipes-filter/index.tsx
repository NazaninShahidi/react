import React, { useEffect, useState } from "react";
import RecipeHeader from "./header";
import "./recipe.css";
import Card from "../ui/Card";

const recipeList = [
  {
    id: "1",
    title: "Savory Herb-Infused Chicken",
    image: "images/recipe/savory-chicken.png",
    description:
      "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
    time: "40 Min - easy prep - 3 serves",
    type: "dinner",
  },
  {
    id: "2",
    title: "Lemon Garlic Grilled Chicken",
    image: "images/recipe/lemon-chicken.png",
    description:
      "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe",
    time: "1 hour - hard prep - 4 serves",
    type: "lunch",
  },
  {
    id: "3",
    title: "Quinoa Veggie Stir-Fry",
    image: "images/recipe/quinoa.png",
    description:
      "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.",
    time: "30 Min - easy prep - 3 serves",
    type: "vegan",
  },
  {
    id: "4",
    title: "Berry Bliss Smoothie Bowl",
    image: "images/recipe/smoothie.png",
    description:
      "This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.",
    time: "10 Min - easy prep - 2 serves",
    type: "vegan",
  },
  {
    id: "5",
    title: "Spaghetti Aglio e Olio",
    image: "images/recipe/spaghetti.png",
    description:
      "A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.",
    time: "20 min - easy prep - 2 serves",
    type: "vegan",
  },
  {
    id: "6",
    title: "Grilled Veggies with Sauce",
    image: "images/recipe/grilled-veggies.png",
    description:
      "Served with a zesty chimichurri sauce its a perfect addition to your outdoor gatherings.",
    time: "25 Min - medium prep - 6 serves",
    type: "vegan",
  },
];

function RecipesFilter() {
  const [filteredList, setFilteredList] = useState(recipeList);

  const handlerChangeList = (list) => {
    setFilteredList(list);
  };

  return (
    <div className="recipe-section">
      <RecipeHeader list={recipeList} handlerChangeList={handlerChangeList} />
      <div className="recipe-card">
        {filteredList.length ? (
          filteredList?.map((recipe) => <Card key={recipe.id} item={recipe} />)
        ) : (
          <div className="not-founded">
            <p>Not Founded!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecipesFilter;
