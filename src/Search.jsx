
import React from "react";
import { useGlobalcontext } from "./context";

const Search = () => {
  const { query, setquery, error } = useGlobalcontext();
  
  return (
    <>
      <section className="search-section">
        <h2>Search Your Favourite Movie</h2>
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div>
            <input
              type="text"
              placeholder="search movie"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
          </div>
        </form>
        <div className="card-error">
          <p>{error.show && error.msg}</p>
        </div>
      </section>
    </>
  );
};

export default Search;