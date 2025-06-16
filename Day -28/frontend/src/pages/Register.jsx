import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userActions";

function Register() {
  const dispatch = useDispatch();
  const RegisterHandler = (user) => {
    user.id = nanoid();
    console.log(user);
    dispatch(asyncRegisterUser(user))
  };
  const { register, handleSubmit, reset } = useForm();
  return (
    <form
      onSubmit={handleSubmit(RegisterHandler)}
      className="flex flex-col w-1/2"
    >
      <input
        {...register("email")}
        className="p-2 outline-0 border-b font-thin "
        type="email"
        placeholder="email"
      />
      <input
        {...register("username")}
        className="p-2 outline-0 border-b font-thin "
        type="text"
        placeholder="username"
      />
      <input
        {...register("passowrd")}
        className="p-2 outline-0 border-b font-thin "
        type="password"
        placeholder="password"
      />
      <button className="bg-blue-400 mt-5 px-5 py-1 rounded">Register</button>

      <p className="mt-2">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-400 font-medium">
          Login
        </Link>
      </p>
    </form>
  );
}

export default Register;
