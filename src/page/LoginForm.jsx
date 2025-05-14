import React, { use } from 'react'
import { Authcontext } from '../provider/Authprovider';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from "react-toastify";
const LoginForm = () => {
  const navigate=useNavigate();
  const { updateUserProfile,setLoading } = use(Authcontext);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
  
    try {
      await updateUserProfile({ displayName: name, photoURL: url });
      setLoading(false);
      navigate("/");
      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile.");
    }
  
    form.reset();
  };
  return (
    
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Update Profile</h2>

        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            required
            name='name'
            className="w-full px-4 placeholder:font-semibold py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Joe Doe"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm  font-semibold text-gray-700">Photo Url</label>
          <input
            type="text"
            required
            name='url'
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder:font-semibold"
            placeholder="Photo url"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
        >
          Update
        </button>
      </form>
    
  )
}

export default LoginForm
