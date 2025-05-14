import React, { use } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router";
import { Authcontext } from "../provider/Authprovider";

export default function Navbar() {
  const photolink =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLlSGeo64I7x6W55DETCMNffk5TG_hHsSQiw&s";
  const navivgate = useNavigate();
  const { user, logout } = use(Authcontext);
  console.log(user);
  const handleLogout = () => {
    logout()
      .then(() => {
        navivgate("/");
        toast.warning("You have just log out!");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(errorMessage);
      });
  };
  return (
    <div>
      <div className="navbar  bg-blue-50 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm space-x-2 dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
             <Link to="/" className="font-semibold text-xl">
              Home
            </Link>
            <Link to="/profile" className="font-semibold text-xl">
              My Profile
            </Link>
            <Link to="/cart" className="font-semibold text-xl">
              Cart
            </Link>
            </ul>
          </div>
          <img className="w-[120px]" src="https://i.postimg.cc/DfqQH0qm/Screenshot-2025-05-14-203418.png" alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-5 px-1">
            <Link to="/" className="font-semibold text-xl">
              Home
            </Link>
            <Link to="/profile" className="font-semibold text-xl">
              My Profile
            </Link>
            <Link to="/cart" className="font-semibold text-xl">
              Cart
            </Link>
          </ul>
        </div>
        <div className="navbar-end space-x-2">
          {user && (
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || photolink} // Fallback to default photo link
            >
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={user?.photoURL || photolink} // Fallback to default photo link
                alt="User Profile"
                
                onError={(e) => {
                  e.target.src = photolink; // Replace with default image if the link is broken
                }}
              />
            </div>
          )}


          {user ? (
            <Link className="btn" onClick={handleLogout}>
              Logout
            </Link>
          ) : (
            <>
              <Link className="btn" to="/login">
                Login
              </Link>
              <Link className="btn" to="/register">
                Register
              </Link>
            </>
          )}
          <ToastContainer></ToastContainer>
        </div>
      </div>
    </div>
  );
}
