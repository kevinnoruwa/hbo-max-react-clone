import React, { useContext, useState } from "react";

export const StateContext = React.createContext();

export const useStateContext = () => {
  return useContext(StateContext);
};

export const HBOProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const defaultUserImg = "https://uifaces.co/our-content/donated/VUMBKh1U.jpg";
  const createUserAction = (e) => {
    setUser(e.target.value);
  };
  return (
    <StateContext.Provider value={{ user, createUserAction, defaultUserImg }}>
      {children}
    </StateContext.Provider>
  );
};
