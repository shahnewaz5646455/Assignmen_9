import React, { use, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../provider/Authprovider";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
export default function Register() {
  
  const { createUsers, setUser, updateUserProfile } = use(Authcontext);
  const auth = getAuth(app);
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
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
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photourl = form.photourl.value;
  
    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter."
      );
      return; // Stop form submission
    }
  
    console.log(name, email, password, photourl);
    createUsers(email, password)
      .then((result) => {
        const user = result.user;
        updateUserProfile({ displayName: name, photoURL: photourl })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photourl });
            console.log(user);
            form.reset();
            toast.success("Registration successful!");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
            setUser(user);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error(errorMessage);
      });
  };

  const [showpass,setShowpass]=useState(false);
  return (
    <div className="flex justify-center  my-3.5">
      <div className=" w-full flex justify-center items-center flex-col">
        <form
          onSubmit={handleSubmit}
          className="bg-white  h-[600px] mt-7 p-6 rounded-2xl shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 placeholder:font-semibold py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Photo URL
            </label>
            <input
              type="text"
              name="photourl"
              id="photourl"
              required
              className="w-full px-4 placeholder:font-semibold py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="URL"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
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
                type={showpass?'text':'password'}
                name="password"
                id="password"
                pattern="^(?=.*[A-Z])(?=.*[a-z]).{6,}$" 
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
              />
              {
                showpass?<FaEyeSlash onClick={()=>{setShowpass(!showpass)}} className="absolute top-3.5 right-4"  />:<FaEye onClick={()=>{setShowpass(!showpass)}} className="absolute top-3.5 right-4" />

              }
              
            </div>
            <p className="text-red-500">Password must be at least 6 characters long, contain at least one uppercase letter, and one lowercase letter.</p>
          </div>

          <button
            type="submit"
            className="w-full bg-black font-bold text-white py-2 rounded-lg hover:bg-blue-300 transition-colors"
          >
            Register
          </button>

          <p className="mt-1 font-semibold">
            Already have an account?{" "}
            <Link to="/login" className="text-red-400 font-semibold">
              Login
            </Link>
          </p>
        </form>
        <button
          onClick={handleGoogleLogin}
          className="w-[28%] bg-white text-black border-2 border-black shadow-lg font-bold flex justify-center items-center gap-2 mt-2  py-2 rounded-lg hover:bg-blue-300 transition-colors"
        >
          <FcGoogle size={30} />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
}
