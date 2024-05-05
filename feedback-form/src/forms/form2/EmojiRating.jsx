import { Angry, Annoyed, Frown, Laugh, Smile } from "lucide-react";
import React from "react";

const EmojiRating = () => {
  const [rating, setRating] = React.useState(0);
  const [ratingIcon] = React.useState([
    <Angry stroke="currentColor" size={35} />,
    <Frown stroke="currentColor" size={35} />,
    <Annoyed stroke="currentColor" size={35} />,
    <Smile stroke="currentColor" size={35} />,
    <Laugh stroke="currentColor" size={35} />,
  ]);

  const handleRating = (index) => {
    setRating(index);
  };

  return (
    <div className="rating-wrapper">
      {ratingIcon.map((icon, index) => (
        <div
          key={index}
          onClick={() => handleRating(index)}
          style={{
            color: index <= rating ? "#facc15" : "#64748b",
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default EmojiRating;
