import { sculptureList } from "./data.js";
import { useState } from "react";

export default function App() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowmore] = useState(false);

  let hasPrev = index > 0;
  let hasNext = index < sculptureList.length - 1;

  const handlePrevClick = () => {
    if (index === 0) {
      return setIndex(sculptureList.length - 1);
    }
    return setIndex(index - 1);
  };

  const handleNextClick = () => {
    if (index === sculptureList.length - 1) {
      return setIndex(0);
    }
    return setIndex(index + 1);
  };

  const handleMoreClick = () => {
    setShowmore(!showMore);
  };

  let sculpture = sculptureList[index];
  return (
    <div>
      <button onClick={handlePrevClick}>Prev</button>
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
      <button onClick={handleMoreClick} disabled={!hasNext || !hasPrev}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
    </div>
  );
}
