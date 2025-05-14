import React from "react";
import { Link } from "react-router";

export default function Card({item}) {
 const {price,frequency,thumbnail,name,tech_category,id}=item;
  return (

    <div className="transition-transform duration-500 hover:scale-103">
      <div className="card bg-base-100 w-88 shadow-sm">
        <figure className="px-10 pt-10 ">
          <img
            src={thumbnail}
            alt="Shoes"
            className="rounded-xl w-[400px] h-[150px] object-cover "
          />
        </figure>
        <div className="card-body  text-center">
          <h2 className="card-title ">{name}</h2>
          <button className="btn bg-white border-2 border-black ">
            {tech_category}
          </button>
          <div className=" flex flex-col">
            <span className=" font-semibold p-1 rounded-xl text-white bg-orange-500 w-[40%] text-center">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Premium</h2>
              <span className="text-xl font-semibold">${price}/{frequency}</span>
            </div>
          </div>
          <div className="card-actions ">
            <Link className="w-full" to={`/Details/${id}`}>
            <button className="btn bg-black text-white w-full">View More</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
