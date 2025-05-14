import React from "react";

export default function Error() {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center bg-white">
        <img
          className="w-[500px] rounded-lg mx-auto"
          src="https://i.postimg.cc/FskJQ1Pq/images-1.png"
          alt="404 illustration"
        />
        <h1 className="text-4xl text-center font-bold text-pink-400 mt-4">
          404 - PAGE NOT FOUND
        </h1>
        <h3 className="text-center font-bold text-lg text-black mt-2">
          Oops! The page you are looking for doesn't exist
        </h3>

        {/* Optional: Add a back home button */}
        <button
          className="mt-6 px-6 py-2 bg-blue-500 font-bold text-white rounded-lg hover:bg-pink-500 transition-colors"
          onClick={() => (window.location.href = "/")}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
