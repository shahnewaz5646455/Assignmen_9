import React, { use } from "react";
import { Authcontext } from "../provider/Authprovider";
import LoginForm from "./LoginForm";

export default function Profile() {
  const { user } = use(Authcontext);

  return (
    <div className="flex flex-col space-y-6 py-2 justify-center items-center min-h-screen px-4">
      {/* Profile Heading */}
      <h1 className="text-2xl mt-3 sm:text-3xl font-bold mb-6 text-center">
        My Profile
      </h1>

      {/* Profile Card and Login Form */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center w-full max-w-5xl">
        {/* Profile Card */}
        <div className="card w-full sm:w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[200px] sm:h-[300px] object-top w-full object-cover"
              src={
                user?.photoURL || "https://i.ibb.co/2kR5zq0/default-user.png"
              }
              alt="User_photo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://i.postimg.cc/59R2xHqS/Screenshot-2025-05-15-122223.png";
              }}
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title text-lg sm:text-xl font-bold">
              {user?.displayName || "User Name"}
            </h2>
            <p className="btn p-1 text-sm sm:text-base">
              {user?.email || "Email"}
            </p>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full sm:w-96">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
