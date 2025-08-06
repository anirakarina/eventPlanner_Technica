import '../App.css';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {

    return (
    <div className='navbar'>
      <div className='navlinks'>
        <div>Full Schedule</div>
        <div>My Schedule</div>
      </div>
      <CgProfile className='profile-icon'/>
    </div>
  )
}

export default Navbar