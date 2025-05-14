import React, { use } from "react";
import { Authcontext } from "../provider/Authprovider";
import LoginForm from "./LoginForm";

export default function Profile() {
  const { user } = use(Authcontext);
  return (
    <div className="flex flex-col space-y-3 justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-6">My Profile</h1>
      <div className="flex gap-4">

      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[300px] object-cover"
            src={user?.photoURL}
            alt="User_photo"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{user.displayName}</h2>
          <p className="btn p-1">{user.email}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
      <LoginForm></LoginForm>
      </div>
    </div>
  );
}
