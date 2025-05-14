import React from "react";
import CrunchyrollCard from "../component/Subcard";
import { useLoaderData, useParams } from "react-router";
import ReviewPage from "./ReviewPage";

export default function Details() {
  const { id } = useParams();
  console.log(id);
  const data = useLoaderData();
  const buyingData = data.find((doc) => doc.id == id);
  console.log(buyingData);

  return (
    <div className="flex justify-center   min-h-screen pt-16 pb-8">
      {/* Added padding to prevent overlap with navbar */}
      <CrunchyrollCard buyingData={buyingData}></CrunchyrollCard>
      <ReviewPage></ReviewPage>
    </div>
  );
}