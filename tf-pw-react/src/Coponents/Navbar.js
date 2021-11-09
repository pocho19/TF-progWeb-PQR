import logo from './homebutton.jpg';
import {Link} from "react-router-dom";

const Navbar = () =>{
    return <div>
        <div className="navbar">
            <Link to={'/main/home'} className='home-button'><img src={logo} className="navbar-element" /><h6 className="home-button"></h6></Link>
                <Link to={'/main/profile'}><h4 className="navbar-element">Profile</h4></Link>
                <h4 className="navbar-element">My Echelons</h4>
        </div>
    </div>
}
export default Navbar