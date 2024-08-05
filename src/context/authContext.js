import React from 'react'
import {  createContext, useContext, useEffect, useState } from "react";
import {  Login, signUp } from '../appwrite/firebase';


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
    const signup = async (email,password) => {
      try {
        console.log("first",email)
          const response = await signUp(email,password);
         await setUser(response)

          return response;
      } catch (error) {
          console.error('Signup Error:', error);
          throw error; 
      }
  };
  return (
    <authContext.Provider value={{ user,Logins,signup }}>
      {children}
    </authContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(authContext);
};
