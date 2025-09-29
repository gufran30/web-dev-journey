import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-stone-700 py-4 flex justify-center items-center gap-10 text-stone-400">
      <NavLink to="/" className={(e) => (e.isActive ? "text-white" : "")}>
        Home
      </NavLink>
      <NavLink to="/about" className={(e) => (e.isActive ? "text-white" : "")}>
        About
      </NavLink>
      <NavLink
        to="/recipes"
        className={(e) => (e.isActive ? "text-white" : "")}
      >
        Recipes
      </NavLink>
      <NavLink
        to="/create-recipes"
        className={(e) => (e.isActive ? "text-white" : "")}
      >
        Create Recipes
      </NavLink>
    </div>
  );
}

export default Navbar;
