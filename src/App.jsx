import { useContext } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import AuthForm from "./components/AuthForm/AuthForm";
import { authContext } from "./components/AuthProvide/AuthProvide";
import clsx from "clsx";
import { themeContext } from "./components/ThemeProvide/ThemeProvide";

function App() {
  const { user } = useContext(authContext);
  const { theme } = useContext(themeContext);
  return user ? (
    <div>
      <section className={clsx(theme === "light" ? "light" : "dark", "sect")}>
        <Header />
      </section>
    </div>
  ) : (
    <AuthForm />
  );
}
export default App;
