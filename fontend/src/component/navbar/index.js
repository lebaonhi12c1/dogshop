import {Link} from 'react-router-dom'
import './navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <Link to='/'>Home page</Link>
            <Link to='/dogs'>Dogs</Link>
            <Link to='/cart'>Cart</Link>
        </div>
    );
}
 
export default Navbar;