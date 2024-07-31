import React from 'react'
import { Login } from "../appwrite/apiAppwrite";
import {  createContext, useContext, useEffect, useState } from "react";

export const authContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  

  
    const Logins = async (email,password) => {
      try {
        const response = await Login(email,password);
        console.log("first", response);
        setUser(response);
      } catch (e) {
        console.error("error", e);
      }
    };

  return (
    <authContext.Provider value={{ user,Logins }}>
      {children}
    </authContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(authContext);
};
