import React from "react";

const StarRating = ({ rating }) => {
  // Convert rating from string to integer
  const numericRating = parseInt(rating, 10);

  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={`star ${index < numericRating ? "filled" : ""}`}
    ></span>
  ));

  return (
    <>
      <style jsx>{`
        .star-rating {
          display: flex;
          align-items: center;
        }
        
        .star {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-image: url("star.svg"); /* Replace with your star image */
          background-size: cover;
        }
        
        .star.filled {
          background-image: url("filled-star.svg"); /* Replace with your filled star image */
        }
      `}</style>
      <div className="star-rating">{stars}</div>
    </>
  );
};

export default StarRating;
