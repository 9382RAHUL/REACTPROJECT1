import React from "react";
import { useGlobalcontext } from "./context";
import {NavLink }from "react-router-dom";

const Movie = () => {
  const { movie,isLoading } = useGlobalcontext();
  if(isLoading){
    return (
      <div className="movie-section">
        <div className="loading">Loading ...</div>
      </div>
    )
  }
  return (
    <>
      <section className="  movie-page">
        <div className="container grid grid-4-col">
          {movie ?
          movie.map((curMovie) => {
            const {imdbID,Title,Poster}=curMovie;
            const moviename=Title.substring(0,15);

            return (
               <NavLink to ={`movie/${imdbID} ` } key={imdbID}>

               <div className="card">
                <div className="card-info">
                  <h2>{moviename.length >=15 ? `${moviename}...` : moviename}</h2>
                  <img src={Poster} alt={imdbID} />
                </div>
               </div>
               </NavLink>
            )
          }):""}
        </div>
      </section>
    </>
  );
};

export default Movie;
