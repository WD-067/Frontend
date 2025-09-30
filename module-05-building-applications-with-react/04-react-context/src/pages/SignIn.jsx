import { use } from "react";
import { Navigate, useNavigate } from "react-router";

import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";

const SignIn = () => {
  const { setUser, user } = use(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (formDate) => {
    const email = formDate.get("email");
    const password = formDate.get("password");

    // Usually this info needs to be send to the backend for verification
    // Only when it is verified, we do setUser
    setUser({ email, password });
    navigate("/profile");
  };

  if (user) return <Navigate to="/" />;

  return (
    <main>
      <form
        action={handleSubmit}
        className="mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
      >
        <label className="block py-4">
          <span className="text-lg font-bold">Email</span>
          <input
            type="email"
            name="email"
            className="input mt-2 block w-full"
          />
        </label>
        <label className="block py-4">
          <span className="text-lg font-bold">Password</span>
          <input
            type="password"
            name="password"
            className="input mt-2 block w-full"
          />
        </label>
        <Button className="btn-primary text-white">Sign In</Button>
        {/* How to show dynamic text in components?
            Option 1 - Pass as regular props
            <Button text='Hello' />
            <Button text='Bye' />

            Option 2 - Pass as children props
            <Button className='btn-primary text-white'>WD67</Button>
        */}
      </form>
    </main>
  );
};

export default SignIn;
