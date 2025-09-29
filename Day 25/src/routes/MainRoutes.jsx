import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Recipes from "../pages/Recipes";
import CreateRecipes from "../pages/CreateRecipes";
import PageNotFound from "../pages/PageNotFound";
import SingleRecipe from "../pages/SingleRecipe";

function MainRoutes() {
  return (
    <div className="bg-stone-800 w-full min-h-[calc(100%-8vh)] ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/create-recipes" element={<CreateRecipes />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
