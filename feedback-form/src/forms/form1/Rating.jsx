import { Star } from "lucide-react";
import React from "react";

const Rating = () => {
  const [rating, setRating] = React.useState(0);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="rating-wrapper">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          fill={index < rating ? "#F5BF03" : "white"}
          stroke={index < rating ? "#F5BF03" : "#696969"}
          onClick={() => handleRating(index + 1)}
        />
      ))}
    </div>
  );
};

export default Rating;
