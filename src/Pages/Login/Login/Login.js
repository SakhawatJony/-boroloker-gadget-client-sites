import React, { useContext } from "react";
import login from "../../../Images/login.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleIcons from "../../../Images/google (2).png";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const {signIn,signInWithGoogle} = useContext(AuthContext)
  
  
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = (data) => {
    console.log(data);
    signIn(data.email,data.password)
    .then(result =>{
       const user = result.user;
       console.log(user)
       navigate(from,{replace:true})
    })
    .catch(error =>console.log(error.message));
  };
  const handleGoogleSignIn = () =>{
    signInWithGoogle()
    .then( (result) =>{
      const user = result.user;
      console.log(user)

        navigate(from, {replace: true})
    })
    .catch(error=>{
      console.log(error)
    })
}
  
  return (
    <section className="mx-6 p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1 items-center justify-items-center">
        <div>
          {" "}
          <img src={login} style={{ height: "400px" }} alt="" />{" "}
        </div>
        <div>
          <h1
            style={{ color: "#555" }}
            className="text-center text-3xl font-bold "
          >
            Please LogIn
          </h1>
          <form className="mt-3" onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  style={{ color: "#555" }}
                  className="label-text font-bold"
                >
                  Your Email
                </span>
              </label>

              <input
                type="text"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                  required: "Email Address is Required",
                })}
              />
              {errors.email && (
                <p className="text-red-500">{errors.email?.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span
                  style={{ color: "#555" }}
                  className="label-text font-bold"
                >
                  Your Password
                </span>
              </label>

              <input
                type="password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "password must be at least 6 characters longer",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500">{errors.password?.message}</p>
              )}
            </div>
            <p style={{ color: "#555" }} className="font-medium mt-1">
              Forget Password?
            </p>

            <input
              style={{ background: "#b8cd06" }}
              className="mt-3 btn font-bold text-white border-none w-80 mt-2"
              type="submit"
            />
          </form>
          <p style={{ color: "#888" }} className="font-medium">
            {" "}
            New to boroloker gadget{" "}
            <Link
              className="font-bold"
              style={{ color: "#b8cd06" }}
              to="/register"
            >
              Create an new Account?
            </Link>
          </p>
          <div className="divider font-bold">OR</div>
          <button
            style={{ background: "#555" }}
            className="btn w-80 border-none"
          >
            {" "}
            <img
              src={GoogleIcons}
              onClick={handleGoogleSignIn}
              style={{ height: "50px", width: "55px" }}
              alt=""
            />{" "}
            Google
          </button>
        </div>
      </div>
    </section>
  );
};

export default Login;
