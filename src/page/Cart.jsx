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
      <div className="flex justify-center items-center gap-5">
        {mycart.length > 0 ? (
          mycart.map((item) => (
            <div key={item.id}>
              <img
                className="w-[300px] rounded-lg object-cover h-[200px]"
                src={item.thumbnail}
                alt={item.name}
              />
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