
import { FaStar } from "react-icons/fa";


const imagemURL = process.env.REACT_APP_IMAGE;

const ListPeople = ({people}) => {
  return (
        <div className="people-card">  
        <img src={imagemURL + people.profile_path} alt={people.name} />
        <h2>{people.name}</h2>
        <p>
          <FaStar />  {people.popularity} Popularidade
        </p>
        
     </div>
  )
}

export default ListPeople;