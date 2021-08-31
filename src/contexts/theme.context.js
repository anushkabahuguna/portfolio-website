import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext();
// ThemeContext.displayName = 'ThemeContext';

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, initialState, reducer }) => {
  const [globalState, dispatch] = useReducer(reducer, initialState);
  return (
    <ThemeContext.Provider value={{ globalState, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
