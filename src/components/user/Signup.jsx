import { useForm } from "react-hook-form"

const Signup = () => {

    const {register, handleSubmit}= useForm()  
    
    const onSubmit = (data) => console.log(data)
    
    return (
        <div className="flex h-screen justify-center items-center" >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-5 p-10 shadow-lg shadow-slate-300  rounded-md " >
                <input {...register("firstName")} placeholder="First Name" className="border rounded-md text-gray-100 px-1.5 py-2 " />
                <input {...register("lastName")} placeholder="Last Name"  className="border rounded-md text-gray-100 px-1.5 py-2 " />
                <input {...register("email")} placeholder="Email"  className="border  rounded-md text-gray-100 px-1.5 py-2 " />
                <input {...register("password")} placeholder="Password"  className="border rounded-md text-gray-100 px-1.5 py-2 " />
                <input type="submit" className="rounded-md text-white bg-blue-500 hover:bg-blue-400 py-1 mt-4" />
            </form>
        </div>
    )
};

export default Signup;