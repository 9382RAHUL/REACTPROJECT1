import{ useState, useEffect } from "react";


export const API_KEY = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const useFetch = (apiParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, seterror] = useState({ show: "false", msg: "" });
  const [movie, setmovie] = useState(null);

  const getmovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setmovie(data.Search || data);
        seterror({ show: "false", msg: "" });
      } else {
        seterror({ show: "true", msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  // debouncing in react js
  useEffect(() => {
    let timeOut = setTimeout(() => {
      getmovies(`${API_KEY}&s=${apiParams}`);
    }, 1000);
    console.log("set");
    return () => {
      clearTimeout(timeOut);
      console.log("clear");
    };
  }, [apiParams]);

  return { isLoading, error, movie };
};

export default useFetch;