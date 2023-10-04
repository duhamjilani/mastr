import { createContext, useState } from "react";
export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const logIn = (user) => {
    setUserData(user);
  };
  const logOut = () => {
    console.log("false");
    setUserData(null);
  };
  const value = { logIn, logOut, userData, setUserData };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
