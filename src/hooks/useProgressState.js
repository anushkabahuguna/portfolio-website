import { useState } from "react";

export default function useProgressState(value) {
  const [progress, setProgress] = useState(0);
  const setTimer = () => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= value ? prevProgress : prevProgress + 1
      );
    }, 300);
    setTimeout(() => {
      clearInterval(timer);
    }, 1000);
  };

  return [progress, setTimer];
}
