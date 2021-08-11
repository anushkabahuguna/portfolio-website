import { useState } from "react";

const useInputState = (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const change = (evt) => {
    setValue(evt.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, change, reset];
};
export default useInputState;
