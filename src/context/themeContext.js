import React, { createContext, useContext, useState } from "react";
import { lightTheme, darkTheme } from "../themes";

const ThemeContext = createContext({
  theme: lightTheme,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  console.log("ThemeProvider theme:", theme);

  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const AppContent = () => {
  const { theme } = useTheme();
  console.log("AppContent theme:", theme);
};