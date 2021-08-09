import { useState } from "react";

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const change = (evt) => {
    setValue(evt.target.value);
  };
  const reset = () => {
    setValue("");
  };
  return [value, change, reset];
};
