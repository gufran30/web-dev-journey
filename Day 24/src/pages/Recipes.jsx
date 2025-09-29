import { useContext } from "react";
import RecipeCard from "./RecipeCard";
import { recipecontext } from "../context/RecipeContext";

function Recipes() {
  const { data } = useContext(recipecontext);

  const renderRecipe = data.map((recipe) => {
    console.log(recipe);
    
    return <RecipeCard key={crypto.randomUUID()} recipe={recipe} />;
  });

  // console.log(data)

  return (
    <div className="flex flex-wrap gap-10 p-15">
      {/* {console.log(data)} */}
      {data.length > 0 ? renderRecipe : "No Recipe Exist."}
    </div>
  );
}

export default Recipes;
