import Container from "@/components/Container";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container className="min-h-screen hero">
      <div className="card flex-shrink-0 w-full max-w-sm ">
        <h1 className="text-black-500 text-2xl ">Account Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label>Phone/E-Mail</label>
            <input
              className="w-full rounded-md"
              type="email"
              {...register("email")}
            />
            <p className="text-red-500 text-end">Forgotten Password?</p>
          </div>
          <div className="flex flex-col gap-3">
            <label>Password</label>
            <input
              className="w-full rounded-md"
              type="password"
              {...register("password")}
            />
          </div>
          <button
            className="border-2 p-4 w-full rounded-md bg-blue-500 text-white-500 my-2 text-white"
            type="submit"
          >
            Login
          </button>
          <p className="text-center">Don't have an account?</p>
          <button
            className="border-2 border-blue-500 p-4 w-full rounded-md text-blue-500 my-2"
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
