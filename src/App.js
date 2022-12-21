import React, { useState } from "react";
import data from "./data";

const App = () => {
  const [reviews, setReviews] = useState(data);
  const [count, setCount] = useState(0);
  const { name, job, image, text } = reviews[count];
  const prev = () => {
    let newCount = count;
    newCount--;
    if (newCount < 0) {
      setCount(reviews.length - 1);
    } else {
      setCount(newCount);
    }
  };
  const next = () => {
    let newCount = count;
    newCount++;
    if (newCount > reviews.length - 1) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  return (
    <>
      <h1>Our Reviews</h1>
      <div className="container">
        <img src={image} />
        <h3>{name}</h3>
        <h4>{job}</h4>
        <p>{text}</p>
        <div className="buttonsec">
          <button onClick={prev}>-</button>
          <button onClick={next}>+</button>
        </div>
      </div>
    </>
  );
};

export default App;
