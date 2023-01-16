import { useEffect, useState } from "react";
import {useSearchParams} from "react-router-dom";
import ListFilms from "../components/ListFilms";
import './Movie.css';

const apiSearchURL = process.env.REACT_APP_SEARCH;
const apiKEY = process.env.REACT_APP_KEY;



const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");


  const getSearchMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchQueryURL = `${apiSearchURL}?${apiKEY}&query=${query}&language=pt-BR`;
    getSearchMovies(searchQueryURL);
  }, [query]);
  

  return (
    <div className="container">
     <h2 className="title">Resultados para <span className="query-text">{query}</span></h2>
     <div className="movies-container">
      { movies.map((movie) => {
          return <ListFilms key={movie.id} movie={movie} /> })
          }
      </div>
    </div>
  );
};

export default Search;

