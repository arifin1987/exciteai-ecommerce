import Container from "@/components/Container";
import { useForm } from "react-hook-form";

const Register = () => {
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
        <h1 className="text-black-500 text-2xl my-4">Register Account</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="md:flex gap-4 my-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                {...register("firstName", { required: true })}
                placeholder="First Name"
                className="rounded-md w-full"
              />
              {errors.firstName && (
                <span className="text-red-600">First Name is required</span>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name</label>
              <input
                type="text"
                {...register("lastName", { required: true })}
                placeholder="Last Name"
                className="rounded-md w-full"
              />
              {errors.lastName && (
                <span className="text-red-600">Last Name is required</span>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-2 my-2">
            <label htmlFor="">E-Mail</label>
            <input
              type="email"
              {...register("email", { required: true })}
              placeholder="E-Mail"
              className="rounded-md w-full"
            />
            {errors.email && (
              <span className="text-red-600">E-mail is required</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Telephone</label>
            <input
              type="number"
              {...register("telephone", { required: true })}
              placeholder="Telephone"
              className="rounded-md w-full my-4"
            />
            {errors.telephone && (
              <span className="text-red-600">Telephone number is required</span>
            )}
          </div>
          <button className="btn btn-primary w-full my-4">Continue</button>
          <p className="text-center my-4">---Already have an account?---</p>
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
