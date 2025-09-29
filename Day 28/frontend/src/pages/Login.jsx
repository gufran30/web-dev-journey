import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

function Login() {
  const LoginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
  };
  const { register, handleSubmit, reset } = useForm();
  return (
    <form onSubmit={handleSubmit(LoginHandler)} className="flex flex-col w-1/2">
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
      <button className="bg-blue-400 mt-5 px-5 py-1 rounded">Login</button>

      <p className="mt-2">
        Don't have an account?{" "}
        <Link to="/register" className="text-blue-400 font-medium">
          Register
        </Link>
      </p>
    </form>
  );
}

export default Login;
