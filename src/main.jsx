import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvide from "./components/AuthProvide/AuthProvide.jsx";
import { Toaster } from "react-hot-toast";
import ThemeProvide from "./components/ThemeProvide/ThemeProvide.jsx";
createRoot(document.getElementById("root")).render(
  <>
    <ThemeProvide>
      <AuthProvide>
        <App />
      </AuthProvide>
      <Toaster />
    </ThemeProvide>
  </>
);
