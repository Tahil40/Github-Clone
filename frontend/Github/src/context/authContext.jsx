import React, { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const authProvider = ({ children }) => {
  const [CurrentUser, SetCurrentUser] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (userId) {
      SetCurrentUser(userId);
    };
  }, []);

  const value = { CurrentUser, SetCurrentUser };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};