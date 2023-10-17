import React, { useEffect, useState } from "react";
import { useContext } from "react";
 export const API_KEY = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setmovie] = useState([]);
  const [error, seterror] = useState({ show: "false", msg: "" });
  const [query, setquery] = useState("titanic");
  const getmovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        seterror({
          show: false,
          msg: "",
        });
        setmovie(data.Search);
      } else {
        seterror({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
   let timeout= setTimeout(() => {
      getmovies(`${API_KEY}&s=${query}`);
    }, 400);
   return ()=>clearTimeout(timeout);
  }, [query]);
  return (
    <AppContext.Provider value={{ isLoading, movie, error, query, setquery }}>
      {children}
    </AppContext.Provider>
  );
};
const useGlobalcontext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider, useGlobalcontext };
