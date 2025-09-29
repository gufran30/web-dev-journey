import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="p-5 flex justify-center items-center gap-x-5 mb-10">
      <NavLink className={(e) => (e.isActive ? "text-blue-400" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-blue-400" : "")}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-blue-400" : "")}
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
}
