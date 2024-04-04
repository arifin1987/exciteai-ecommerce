import Container from "@/components/Container";
import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <Container className="min-h-screen hero">
      <div className="card flex-shrink-0 w-full max-w-sm ">
        <h1 className="text-black-500 text-2xl my-4">Register Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-4">
            <div className="flex flex-col gap-3">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                {...register("firstName")}
                className="rounded-md w-full"
              />
            </div>
            <div className="flex flex-col gap-3">
              <label>Last Name</label>
              <input
                type="text"
                {...register("lastName")}
                className="rounded-md w-full"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="">E-Mail</label>
            <input
              type="email"
              {...register("email")}
              className="rounded-md w-full"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="">Telephone</label>
            <input
              type="number"
              {...register("telephone")}
              className="rounded-md w-full my-4"
            />
          </div>
          <button className="btn btn-primary w-full my-4">Continue</button>
          <p className="text-center my-4">Already have an account?</p>
          <p>
            If you already have an account with us, please login at the login
            page.
          </p>
        </form>
      </div>
    </Container>
  );
};

export default Register;
