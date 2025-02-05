import { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
export const authContext = createContext();
const AuthProvide = ({ children }) => {
  const [user, setUser] = useState("");
  const vhod = (user) => {
    if (!user) {
      return toast.error("Put smth name");
    } else if (user !== "admin") {
      return toast.error("Errrorr name validation");
    }
    setUser(user);
  };
  const logout = () => setUser("");
  const contextValues = {
    user,
    vhod,
    logout,
  };
  return (
    <authContext.Provider value={contextValues}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvide;
