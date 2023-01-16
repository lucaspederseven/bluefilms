import {useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import ListFilms from "../components/ListFilms";
import './Details.css';

const apiURL = process.env.REACT_APP_URL;
const apiKEY = process.env.REACT_APP_KEY;

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieURL = `${apiURL}${id}?${apiKEY}&language=pt-BR`;
    getMovie(movieURL);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <ListFilms movie={movie} ShowLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 />  Orçamento
            </h3>
            <p>{formatCurrency(movie.budget)}</p>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Receita
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Duração
            </h3>
            <p>{movie.runtime} minutos</p>
          </div>
          <div className="descricao">
            <h3>
              <BsFillFileEarmarkTextFill /> Descrição
            </h3>
            <p>{movie.overview}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Details;