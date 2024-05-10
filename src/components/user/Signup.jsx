import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required().min(6),
});

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    axios.post("http://localhost:3000/api/v1/user/signup", data);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5 rounded-md p-10 shadow-lg  shadow-slate-300 "
      >
        <input
          {...register("firstName")}
          placeholder="First Name"
          className="rounded-md border px-1.5 py-2 text-gray-100 "
        />
        {errors.firstName && <p className="text-red-500" >{errors.firstName.message}</p>}
        <input
          {...register("lastName")}
          placeholder="Last Name"
          className="rounded-md border px-1.5 py-2 text-gray-100 "
        />
        {errors.lastName && <p className="text-red-500" >{errors.lastName.message}</p>}
        <input
          {...register("email")}
          placeholder="Email"
          className="rounded-md  border px-1.5 py-2 text-gray-100 "
        />
        {errors.email && <p className="text-red-500" >{errors.email.message}</p>}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="rounded-md border px-1.5 py-2 text-gray-100 "
        />
        {errors.password && <p className="text-red-500" >{errors.password.message}</p>}
        <input
          type="submit"
          className="mt-4 rounded-md bg-blue-500 py-1 text-white hover:bg-blue-400"
        />
      </form>
    </div>
  );
};

export default Signup;
