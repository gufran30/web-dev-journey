import { Link } from "react-router-dom";

function RecipeCard(props) {
  const {
    id,
    recipe_description,
    recipe_image_url,
    recipe_ingredients,
    recipe_title,
  } = props.recipe;

  // console.log(id)

  return (
    <Link
      to={`/recipes/details/${id}`}
      key={id}
      className="bg-stone-700 px-5 py-4 hover:scale-101 hover:shadow-stone-400 hover:shadow-xl/25  cursor-pointer shadow-zinc-100 duration-150 ease-in outlin-none border-none"
    >
      <img
        className="object-cover w-50 h-50 object-center"
        src={recipe_image_url}
        alt="food image"
      />
      <h1 className="text-2xl text-stone-300 font-semibold mt-1 text-center w-50">
        {recipe_title}
      </h1>
    </Link>
  );
}

export default RecipeCard;
