import Container from "@/components/Container";
import { useForm } from "react-hook-form";

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container className="min-h-screen hero">
      <div className="card flex-shrink-0 w-full max-w-sm ">
        <h1 className="text-black-500 text-2xl my-4">Account Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Phone/E-Mail</label>
            <input
              className="w-full rounded-md"
              type="email"
              {...register("email", { required: true })}
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-red-600">Email is required</span>
            )}
            <p className="text-red-500 text-end">Forgotten Password?</p>
          </div>
          <div className="flex flex-col gap-3">
            <label>Password</label>
            <input
              className="w-full rounded-md"
              type="password"
              {...register("password", { required: true })}
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-red-600">Password is required</span>
            )}
          </div>
          <button
            className="border-2 p-4 w-full rounded-md bg-blue-500 text-white-500 my-2 text-white"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">Don't have an account?</p>
          <button
            className="border-2 border-blue-500 hover:bg-blue-500 hover:text-white p-4 w-full rounded-md text-blue-500 my-2"
            type="submit"
          >
            Create Your Account
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
