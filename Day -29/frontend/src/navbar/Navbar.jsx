import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const user = useSelector((state) => state.userReducer.userValue);
  console.log(user);

  return (
    <nav className="flex justify-center items-center gap-10 py-5">
      <NavLink className={(e) => (e.isActive ? "text-blue-300" : "")} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? "text-blue-300" : "")}
        to="/products"
      >
        Products
      </NavLink>

      {/* This is what we called Restricted route / Authetication Route */}
      {user ? (
        <>
          <NavLink
            className={(e) => (e.isActive ? "text-blue-300" : "")}
            to="/admin/create-product"
          >
            Create Product
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            className={(e) => (e.isActive ? "text-blue-300" : "")}
            to="/login"
          >
            Login
          </NavLink>
        </>
      )}
    </nav>
  );
}
