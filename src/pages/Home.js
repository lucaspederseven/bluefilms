import { useState, useEffect } from "react";
import ListFilms from "../components/ListFilms";
import './Movie.css';
import ListPeople from "../components/ListPeople";
 
const apiURL = process.env.REACT_APP_URL;
const apiKEY = process.env.REACT_APP_KEY;
const peopleURL = process.env.REACT_APP_PEOPLE;

const Home = () => {

  const [peoplePopular, setPeoplePopular] = useState([]);
  const [popular, setPopular] = useState([]);
  
  const getPopularPeople = async (url) =>{
    const res = await fetch (url);
    const data = await res.json();
    setPeoplePopular(data.results);
  }
  useEffect(()=> {
    const topRatedPeople = `${peopleURL}?${apiKEY}&language=pt-BR`;
    getPopularPeople(topRatedPeople);
  }, []);



  const getPopularMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setPopular(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${apiURL}top_rated?${apiKEY}&language=pt-BR`;
    getPopularMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
     <h3 className="title">Filmes populares</h3>
     <div className="movies-container">
      {popular.slice(0,6).map((movie) => {
          return <ListFilms key={movie.id} movie={movie} />;
        })}
      </div>
      <h3 className="title">Atores populares</h3>
      <div className="people-container">
      {peoplePopular.slice(0,6).map((people) => {
          return <ListPeople key={people.id} people={people} />;
        })}
    </div>
    </div>
  );
};
export default Home;