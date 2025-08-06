import '../App.css';
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {

    return (
        <div className='searchBar'>
            <div>Search for events and workshops</div>
            <FaSearch />
        </div>
    )
}

export default SearchBar