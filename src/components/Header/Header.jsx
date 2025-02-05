import { useContext } from "react";
import { authContext } from "../AuthProvide/AuthProvide";
import { themeContext } from "../ThemeProvide/ThemeProvide";

const Header = () => {
  const { user, logout } = useContext(authContext);
  const { theme, changeTheme } = useContext(themeContext);
  return (
    <div>
      <h2>It`s header page</h2>
      <p>Hello : {user}</p>
      <button onClick={logout}>Logout</button>
      <button onClick={changeTheme}>{theme}</button>
    </div>
  );
};

export default Header;
