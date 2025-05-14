import React, { use } from "react";
import { Authcontext } from "../provider/Authprovider";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const CrunchyrollCard = ({ buyingData }) => {
  const { mycart, setMycart } = use(Authcontext);
  const navigate = useNavigate();

  const handleClick = () => {
    // Check if the item is already in the cart
    const isAlreadyInCart = mycart.some((item) => item.id === buyingData.id);

    if (isAlreadyInCart) {
      toast.warning("This item is already in your cart!")
    } else {
      // Add the item to the cart
      setMycart([...mycart, buyingData]);
      navigate('/cart')
      toast.success("This item is added in your cart!")
    }
  };

  const { price, frequency, name, description, subscription_benefits } =
    buyingData;

  return (
    <div className="max-w-sm  border-t-4 border-orange-500 bg-gray-600 text-white rounded-md shadow-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-center uppercase">{name}</h2>
      <p className="text-center text-2xl font-semibold">
        ${price}/{frequency}
      </p>
      <p className="text-xs text-center text-gray-400">+ Applicable Taxes</p>

      <button
        onClick={handleClick}
        className="w-full bg-orange-500 text-black font-bold py-2 rounded hover:bg-orange-400 transition"
      >
        SUBSCRIBE NOW
      </button>

      <p className="text-center text-sm font-medium underline cursor-pointer hover:text-orange-400">
        SKIP FREE TRIAL
      </p>

      <p className="text-sm text-center font-medium border-t border-gray-600 pt-4">
        {description}
        <span className="text-orange-500">*</span>
      </p>

      <ul className="text-sm space-y-2 pt-2">
        {subscription_benefits.map((item, index) => (
          <li key={index} className="flex items-start gap-2">
            <span className="text-orange-500">✓</span> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrunchyrollCard;