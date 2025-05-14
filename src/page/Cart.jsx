import React, { use } from "react";
import { Authcontext } from "../provider/Authprovider";

export default function Cart() {
  const { mycart } = use(Authcontext);
  console.log(mycart);

  return (
    <div className="h-screen">
      <h1 className="text-3xl font-semibold py-5 text-center">
        ALL SUBSCRIPTION
      </h1>
      <div className="flex flex-wrap justify-center items-center gap-5">
        {mycart.length > 0 ? (
          mycart.map((item) => (
            <div key={item.id} className="">
              <img
                className="w-[300px] rounded-lg object-cover h-[200px]"
                src={item.thumbnail}
                alt={item.name}
              />
              <a
                href={item.link} // Use <a> tag for external links
                target="_blank" // Open in a new tab
                rel="noopener noreferrer" // Security best practice
              >
                <button className="btn mt-3 w-full bg-orange-400">
                  Visit site
                </button>
              </a>
            </div>
          ))
        ) : (
          <div className="w-[250px] border-2 border-dashed rounded-lg h-[300px] flex justify-center items-center">
            <h1 className="text-2xl">The cart is empty</h1>
          </div>
        )}
      </div>
    </div>
  );
}