import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "./RecipeCard";

function Recipes() {
  const { data } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => {
    // console.log(recipe);
    return <RecipeCard key={recipe.id} recipe={recipe} />;
  });

  return (
    <div className="flex flex-wrap gap-10 p-15">
      {data.length > 0 ? renderRecipe : "No Recipe Exist."}
    </div>
  );
}

export default Recipes;
