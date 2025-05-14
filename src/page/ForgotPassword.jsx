import { toast } from "react-toastify";
import { Authcontext } from "../provider/Authprovider";
import { useState, useEffect, use } from "react";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import app from "../firebase/firebase.config";


const auth=getAuth(app);
const ForgotPassword = () => {
  const { email } = use(Authcontext); 
  
  const [inputEmail, setInputEmail] = useState(""); 
  useEffect(() => {
    if (email) {
      setInputEmail(email);
    }
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputEmail) {
      toast.error("Please enter a valid email address.");
      return;
    }
    sendPasswordResetEmail(auth, email)
  .then(() => {
    toast.success("A password email is sent to your email.");
    window.location.href = "https://mail.google.com/";
  })
  .catch((error) => {
    const errorMessage = error.message;
    toast.warning(errorMessage);
    // ..
  });
  };
console.log(email);
  return (
    <div className="flex justify-center  h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg h-[300px] mt-14 shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Reset Password
        </h2>
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-gray-700">
            Email
          </label>
          <input
            type="email"
            value={inputEmail} // Bind input value to state
            onChange={(e) => setInputEmail(e.target.value)} // Update state on change
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:font-semibold"
            placeholder="Enter your email"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;