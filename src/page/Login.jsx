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
  const { login, setUser, setEmail } = use(Authcontext);

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
    } else {
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
    <div className="flex justify-center py-3 items-center min-h-screen px-4">
      <div className="w-full max-w-md flex flex-col items-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-full p-6 rounded-2xl shadow-md space-y-6"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center">LOGIN</h2>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailref}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-semibold"
              placeholder="you@example.com"
            />
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium">
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
                  onClick={() => setShowpass(!showpass)}
                  className="absolute top-3.5 right-4 cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={() => setShowpass(!showpass)}
                  className="absolute top-3.5 right-4 cursor-pointer"
                />
              )}
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-bold hover:bg-blue-300 transition-colors"
          >
            Login
          </button>

          {/* Register and Forgot Password Links */}
          <p className="text-center text-sm sm:text-base font-semibold">
            Don't have an account?{" "}
            <Link to="/register" className="text-red-400 hover:underline">
              Register
            </Link>
          </p>
          <p className="text-center text-sm sm:text-base font-semibold">
            <Link
              onClick={handleforgetpass}
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </p>
        </form>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full bg-white text-black border-2 border-black shadow-lg font-bold flex justify-center items-center gap-2 mt-4 py-2 rounded-lg hover:bg-blue-300 transition-colors"
        >
          <FcGoogle size={30} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}