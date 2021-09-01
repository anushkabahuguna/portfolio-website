import React, { useContext, createContext } from "react";
import useToggleState from "../hooks/useToggleState";
const Store = createContext();
Store.displayName = "Store";

export const useStore = () => useContext(Store);

export const StoreProvider = ({ children }) => {
  const [isDarkTheme, changeTheme] = useToggleState(true);
  return (
    <Store.Provider value={{ isDarkTheme, changeTheme }}>
      {children}
    </Store.Provider>
  );
};
