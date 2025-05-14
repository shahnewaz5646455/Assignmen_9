import React, { use, useRef } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Authcontext } from "../provider/Authprovider";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import { useState } from "react";
const auth = getAuth(app);
export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const emailref = useRef();
  const provider = new GoogleAuthProvider();
  const { login, setUser,setEmail } = use(Authcontext);
  const handleGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        navigate(location.state || "/");
        toast.success("Login successful!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  const handleforgetpass = () => {
    if (emailref.current.value) {
      setEmail(emailref.current.value);
      navigate("/forgot-password");
    }
    else{
      toast.error("Please enter a valid email address.");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log("success");
        navigate(location.state || "/");
        toast.success("Login successful!");
      })
      .then((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };

  const [showpass, setShowpass] = useState(false);
  return (
    <div className="flex justify-center  h-[80vh]">
      <div className=" w-full flex justify-center items-center flex-col">
        <form
          onSubmit={handleSubmit}
          className="bg-white  h-[360px] mt-7 p-6 rounded-2xl shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">LOGIN</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailref}
              required
              className="w-full px-4 placeholder:font-semibold py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-1 text-sm font-medium"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showpass ? "text" : "password"}
                name="password"
                id="password"
                pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              {showpass ? (
                <FaEyeSlash
                  onClick={() => {
                    setShowpass(!showpass);
                  }}
                  className="absolute top-3.5 right-4"
                />
              ) : (
                <FaEye
                  onClick={() => {
                    setShowpass(!showpass);
                  }}
                  className="absolute top-3.5 right-4"
                />
              )}
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black font-bold text-white py-2 rounded-lg hover:bg-blue-300 transition-colors"
          >
            Login
          </button>

          <p className="mt-1 font-semibold">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-400 font-semibold">
              Register
            </Link>
            <p className="mt-2 font-semibold">
              <Link
                onClick={handleforgetpass}
                className="text-blue-500 pb-1.5 hover:underline"
              >
                Forgot Password?
              </Link>
            </p>
          </p>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-[20%] bg-white text-black border-2 border-black shadow-lg font-bold flex justify-center items-center gap-2 mt-2  py-2 rounded-lg hover:bg-blue-300 transition-colors"
        >
          <FcGoogle size={30} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}
