import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userAction";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  function registerHandler(userData) {
    userData.id = nanoid();
    userData.isAdmin = false;
    // console.log(userData);
    dispatch(asyncRegisterUser(userData));
    navigate("/login");
  }

  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex
    flex-col gap-4 w-1/2"
    >
      <input
        {...register("email")}
        className="outline-0 border-b p-2"
        type="email"
        placeholder="email"
      />
      <input
        {...register("username")}
        className="outline-0 border-b p-2"
        type="text"
        placeholder="username"
      />
      <input
        {...register("password")}
        className="outline-0 border-b p-2"
        type="password"
        placeholder="password"
      />
      <button className="px-3 py-1 bg-blue-500 rounded">Register</button>
      <p className="text-center">
        Already have an account?{" "}
        <Link className="text-blue-400 hover:text-blue-300" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
}
