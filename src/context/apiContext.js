import {  createContext, useContext, useEffect, useState } from "react";
import { getBooks, getStory } from "../api/api";

export const apiContext = createContext();

export const ApiProvider = ({ children }) => {
  const [book, setBook] = useState([]);
  const [stories, setStory] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        console.log("first", response);
        setBook(response);
      } catch (e) {
        console.error("error", e);
      }
    };
    fetchBooks();
  }, []);

  useEffect(() => {
    const fetchStories = async () => {
      try {
        const response = await getStory();
        console.log("first", response);
        setStory(response);
      } catch (e) {
        console.error("error", e);
      }
    };
    fetchStories();
  }, []);

  return (
    <apiContext.Provider value={{ book, stories }}>
      {children}
    </apiContext.Provider>
  );
};

export const useApi = () => {
  return useContext(apiContext);
};
