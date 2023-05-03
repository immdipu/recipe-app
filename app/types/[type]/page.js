import React from "react";
import RecipeList from "@/components/RecipeList";

const getRecipe = async (type) => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`
  );
  const data = await res.json();
  return data;
};

const page = async ({ params }) => {
  const recipes = await getRecipe(params.type);

  return <RecipeList recipes={recipes.meals} type={params.type || ""} />;
};

export default page;
