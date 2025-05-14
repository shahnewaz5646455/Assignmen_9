import React from "react";
import { Link } from "react-router";

export default function Card({ item }) {
  const { price, frequency, thumbnail, name, tech_category, id } = item;

  return (
    <div className="transition-transform duration-500 hover:scale-105">
      <div className="card bg-base-100 shadow-sm w-full max-w-sm mx-auto">
        {/* Image Section */}
        <figure className="px-4 pt-4 sm:px-6 sm:pt-6">
          <img
            src={thumbnail}
            alt={name}
            className="rounded-xl w-full h-[150px] sm:h-[200px] object-cover"
          />
        </figure>

        {/* Card Body */}
        <div className="card-body text-center space-y-4">
          {/* Title */}
          <h2 className="card-title text-lg sm:text-xl font-bold">{name}</h2>

          {/* Tech Category Button */}
          <button className="btn bg-white border-2 border-black text-sm sm:text-base">
            {tech_category}
          </button>

          {/* Pricing Section */}
          <div className="flex flex-col items-center space-y-2">
            <span className="font-semibold p-1 rounded-xl text-white bg-orange-500 w-auto px-4 text-center text-xs sm:text-sm">
              Most Popular
            </span>
            <div className="flex justify-between w-full text-sm sm:text-base">
              <h2 className="text-lg sm:text-xl font-bold">Premium</h2>
              <span className="text-base sm:text-lg font-semibold">
                ${price}/{frequency}
              </span>
            </div>
          </div>

          {/* View More Button */}
          <div className="card-actions">
            <Link className="w-full" to={`/Details/${id}`}>
              <button className="btn bg-black text-white w-full text-sm sm:text-base">
                View More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}