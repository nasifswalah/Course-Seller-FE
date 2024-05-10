import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { Link } from "react-router-dom";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/api/v1/instructor/signin", data);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 rounded-md p-10 shadow-lg  shadow-slate-300 justify-center w-1/5 h-1/2"
      >
        <input
          {...register("email")}
          placeholder="Email"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.email && <p className="text-red-500" >{errors.email.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 px-2 py-1.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500"
        />
        {errors.password && <p className="text-red-500" >{errors.password.message}</p>}
        <input
          type="submit"
          className="rounded-md bg-blue-500 py-1 text-white"
        />
        <p className="text-center">
        Instructor not created{" "}
        <Link to="/instructor/signup" className="text-blue-500 underline">
          Signup
        </Link>
      </p>
      </form>
    </div>
  );
};

export default Signin;
