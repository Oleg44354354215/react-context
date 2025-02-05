import { useState } from "react";
import { createContext } from "react";
export const themeContext = createContext();
const ThemeProvide = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const changeTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  const contextValues = {
    theme,
    changeTheme,
  };
  return (
    <themeContext.Provider value={contextValues}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvide;
