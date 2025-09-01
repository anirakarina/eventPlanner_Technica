import '../App.css';
import { CgProfile } from "react-icons/cg";
import {Link} from "react-router-dom";

const Navbar = () => {

    return (
    <div className='navbar'>
      <div className='navlinks'>
        <Link to="/FullSchedule">Full Schedule</Link>
        <Link to="/MySchedule">My Schedule</Link>
        <Link to="/Login">Login</Link>
        <Link to="/">Signup</Link>
      </div>
      <CgProfile className='profile-icon'/>
    </div>
  )
}

export default Navbar