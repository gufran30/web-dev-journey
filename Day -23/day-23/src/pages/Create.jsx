import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function Create() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { error },
  } = useForm();

  const formSubmitHandler = (data) => {
    data.id = nanoid();
    // console.log(data);
    const { id, recipe_title, recipe_image_url, recipe_ingredients, recipe_description } = data;
    console.log("id : " + id);
    console.log("Recipe name : " + recipe_title);
    console.log("Recipe image url : " + recipe_image_url);
    console.log("Recipe ingredients : " + recipe_ingredients);
    console.log("Recipe desc : " + recipe_description);

    reset();
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <form
        className="bg-stone-700 p-5 w-100 rounded"
        onSubmit={handleSubmit(formSubmitHandler)}
      >
        <h1 className="block text-3xl mb-8">Create New Recipe</h1>

        <input
          {...register("recipe_title")}
          className="block bg-stone-800 w-full px-1 py-1 mb-2 rounded outline-0"
          type="text"
          placeholder="Recipe name"
        />

        <input
          {...register("recipe_image_url")}
          className="block bg-stone-800 w-full px-1 py-1 rounded mb-2 outline-0"
          type="url"
          placeholder="Recipe image url"
        />

        <textarea
          {...register("recipe_ingredients")}
          className="block bg-stone-800 w-full px-1 py-1 rounded mb-2 outline-0 w-60 h-20"
          type="text"
          placeholder="// Recipe ingredients"
        />

        <textarea
          {...register("recipe_description")}
          className="block bg-stone-800 w-full px-1 py-1 rounded mb-2 outline-0 w-60 h-20"
          type="text"
          placeholder="// Recipe description"
        />

        <select className="bg-stone-800 px-2 py-1 rounded border-none outline-0">
          <option value="">Select category</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>

        <button
          type="submit"
          className="block hover:bg-green-900 bg-green-800 text-sm px-2 py-1 rounded mt-5"
        >
          Save Recipe
        </button>
      </form>
    </div>
  );
}

export default Create;
