import React from "react";
import { useSpring, animated } from "react-spring";
import "./Loading.css";
function Loading() {
  const { number } = useSpring({
    reset: false,
    reverse: false,
    from: { number: 0 },
    number: 100,
    delay: 400,
    config: { duration: 2000 },
  });

  return (
    <div className="Not-Found">
      <h1 className="loading-title">Loading...</h1>
      <div className="loading-div">
        <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
        <span className="percent">%</span>
      </div>
    </div>
  );
}

export default Loading;
