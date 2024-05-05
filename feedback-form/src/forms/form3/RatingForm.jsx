import { Angry, Annoyed, Frown, Laugh, Smile } from "lucide-react";
import React from "react";

const EmojiRating = () => {
  const [rating, setRating] = React.useState(0);
  const [ratingIcon] = React.useState([
    {
      icon: <Angry stroke="currentColor" size={35} />,
      label: "Very Bad",
      minValue: 0,
      maxValue: 20,
    },
    {
      icon: <Frown stroke="currentColor" size={35} />,
      label: "Not Good",
      minValue: 20,
      maxValue: 40,
    },
    {
      icon: <Annoyed stroke="currentColor" size={35} />,
      label: "Fine",
      minValue: 40,
      maxValue: 60,
    },
    {
      icon: <Smile stroke="currentColor" size={35} />,
      label: "Looks Good",
      minValue: 60,
      maxValue: 80,
    },
    {
      icon: <Laugh stroke="currentColor" size={35} />,
      label: "Very Good",
      minValue: 80,
      maxValue: 100,
    },
  ]);

  return (
    <div>
      <div className="rating-wrapper">
        {ratingIcon.map((icon, index) => (
          <div
            key={index}
            style={{
              color: index <= rating ? "#facc15" : "#64748b",
            }}
          >
            {icon.icon}
            {
              <span
                style={{
                  fontSize: "0.8rem",
                  display: "block",
                  color: "#64748b",
                }}
              >
                {icon.label}
              </span>
            }
          </div>
        ))}
      </div>
      <input
        type="range"
        min="0"
        max="100"
        defaultValue={rating}
        onChange={(e) => {
          const value = e.target.value;
          const ratingIndex = ratingIcon.findIndex(
            (icon) => value >= icon.minValue && value <= icon.maxValue
          );
          setRating(ratingIndex);
        }}
        step="20"
        style={{ padding: 0 }}
      />
    </div>
  );
};

export default EmojiRating;
