import { useContext, useEffect } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useParams } from "react-router-dom";

function SingleRecipe() {
  const { data, setdata } = useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  // console.log(recipe);

  // const ingredients = recipe.recipe_ingredients;
  // const description = recipe.recipe_description;

  // useEffect(() => {
  //   console.log("SingleRecipe.jsx Mounted");
  //   return () => {
  //     console.log("SingleRecipe.jsx Unmounted");
  //   };
  // }, []);

  return (
    <div className="flex gap-10 p-20">
      <img
        className="w-1/2 h-125 object-cover object-center"
        src={recipe.recipe_image_url}
        alt=""
      />
      <div className="informations w-1/2">
        <h1 className="text-4xl capitalize font-black border-b-2 pb-2 w-full">
          {recipe.recipe_title}
        </h1>

        <div className="forIngredients">
          <h2 className="text-xl text-stone-400 mt-5">Ingredients:</h2>
          <p className="ml-10 text- text-stone-400 mt-2">
            {recipe.recipe_ingredients.split(", ").map((elem) => {
              return <li>{elem}</li>;
            })}
          </p>
        </div>

        <div className="forDescriptions">
          <h2 className="text-xl text-stone-400 mt-5">Instructions:</h2>
          <p className="ml-10 text- text-stone-400 mt-2">
            {recipe.recipe_description.split(", ").map((elem) => {
              return <li>{elem}</li>;
            })}
          </p>
        </div>

        {/* <p className="text-lg text-stone-400">{recipe.recipe_ingredients}</p>
        <p className="text-lg text-stone-400">{recipe.recipe_description}</p> */}
      </div>
    </div>
  );
}

export default SingleRecipe;
