import React, { use } from "react";
import { Authcontext } from "../provider/Authprovider";

export default function Cart() {
  const { mycart } = use(Authcontext);
  // console.log(mycart);

  return (
    <div className="min-h-screen px-4 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold py-5 text-center">
        ALL SUBSCRIPTION
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {mycart.length > 0 ? (
          mycart.map((item) => (
            <div
              key={item.id}
              className="w-full sm:w-[300px] bg-white rounded-lg shadow-md p-4"
            >
              <img
                className="w-full h-[200px] rounded-lg object-cover"
                src={item.thumbnail}
                alt={item.name}
              />
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn mt-3 w-full bg-orange-400 text-white font-bold py-2 rounded-lg hover:bg-orange-500 transition">
                  Visit site
                </button>
              </a>
            </div>
          ))
        ) : (
          <div className="w-full sm:w-[250px] border-2 border-dashed rounded-lg h-[300px] flex justify-center items-center">
            <h1 className="text-lg sm:text-2xl text-center">The cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
}