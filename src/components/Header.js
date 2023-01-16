import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {AiOutlineSearch} from 'react-icons/ai';
import {GiFilmSpool} from 'react-icons/gi';
import './Header.css';

const Header = () => {
  const  [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!search) return

    navigate(`/search?q=${search}`)
    setSearch("");
  }


  return (
    <nav id="navbar">
        <h2>
            <Link to="/"><GiFilmSpool/> BlueFilms</Link>
        </h2>
       <form onSubmit={handleSubmit}>

        <input type="text" placeholder="Busque por um título.." onChange={(e) => setSearch(e.target.value)} value={search} />
        <button type="submit"> <AiOutlineSearch/> </button>
       </form>
    </nav>
  )
}

export default Header;