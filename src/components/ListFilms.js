import {Link} from "react-router-dom"
import { FaStar } from "react-icons/fa";

const imagemURL = process.env.REACT_APP_IMAGE;

const ListFilms = ({ movie, showLink = true}) => {
    return (
        <div className="movie-card">  
        <img src={imagemURL + movie.poster_path} alt={movie.title} />
        <h2>{movie.title}</h2>
        <p>
           <FaStar /> {movie.vote_average}/10
        </p>
     {<Link to={`/movie-detail/${movie.id}`}>Detalhes</Link>}
     </div>
   );
 };
  export default ListFilms;