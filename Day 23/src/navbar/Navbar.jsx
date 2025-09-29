import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-stone-700 py-4 flex justify-center items-center gap-10 text-stone-400">
      <NavLink className={(e) => (e.isActive ? "text-white" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-white" : "")}
        to="about/"
      >
        About
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-white" : "")}
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-white" : "")}
        to="/create-recipes"
      >
        Create Recipes
      </NavLink>
    </div>
  );
}
export default Navbar;
