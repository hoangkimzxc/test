import { sculptureList } from "./data.js";
import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowmore] = useState(false);

  const handleNextClick = () => {
    setIndex(index + 1);
  };

  const handleMoreClick = () => {
    setShowmore(!showMore);
  };

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>
          {sculpture.name} by{sculpture.artist}
        </i>
      </h2>
      <h3>
        {index + 1} of {sculptureList.length}
      </h3>
      <img src={sculpture.url} alt={sculpture.alt} />
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </div>
  );
}
