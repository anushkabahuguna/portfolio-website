import { useState } from "react";

function useToggleState(initialVal = false) {
  // call useState
  const [state, setState] = useState(initialVal);
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}
//return peice of state and function to change it

export default useToggleState;
