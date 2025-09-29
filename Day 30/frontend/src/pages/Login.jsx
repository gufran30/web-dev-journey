import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userAction";

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate()

  function loginHandler(userData) {
    console.log(userData);
    dispatch(asyncLoginUser(userData));
    navigate("/")
  }

  return (
    <form
      onSubmit={handleSubmit(loginHandler)}
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
        {...register("password")}
        className="outline-0 border-b p-2"
        type="password"
        placeholder="password"
      />
      <button className="px-3 py-1 bg-blue-500 rounded">Login</button>
      <p className="text-center">
        Don't have an account?{" "}
        <Link className="text-blue-400 hover:text-blue-300" to="/register">
          Register
        </Link>
      </p>
    </form>
  );
}
