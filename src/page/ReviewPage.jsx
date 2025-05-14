import React, { useState } from "react";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]); // State to store reviews
  const [reviewText, setReviewText] = useState(""); // State for review input
  const [rating, setRating] = useState(""); // State for rating input

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate rating input
    if (rating < 1 || rating > 5) {
      alert("Rating must be between 1 and 5.");
      return;
    }

    // Add the new review to the reviews array
    const newReview = {
      id: Date.now(), // Unique ID for each review
      text: reviewText,
      rating: parseInt(rating),
    };

    setReviews([...reviews, newReview]); // Update reviews state
    setReviewText(""); // Clear review input
    setRating(""); // Clear rating input
  };

  return (
    <div className="flex flex-col w-[85%]  md:w-[40%] items-center p-0 space-y-6">

      {/* Review Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-gray-600 border-t-4 border-orange-500 p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <div>
          <label className="block text-sm font-semibold text-white">
            Review
          </label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            required
            className="w-full px-4 py-2 border-2 border-white placeholder:font-bold placeholder:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Write your review here..."
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-semibold text-white">
            Rating (1-5)
          </label>
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="1"
            max="5"
            className="w-full border-2 border-white placeholder:font-bold placeholder:text-white  px-4 py-2  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter a rating between 1 and 5"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="w-full max-w-md  h-[250px] overflow-y-scroll space-y-4">
        <h2 className="text-2xl font-bold">Submitted Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet. Be the first to review!</p>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-100 p-4 rounded-lg shadow-md space-y-2"
            >
              <p className="text-lg font-semibold">{review.text}</p>
              <p className="text-sm text-gray-600">Rating: {review.rating}/5</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewPage;