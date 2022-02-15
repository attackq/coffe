import './navbar.css';
import { Link } from "react-router-dom";

function Navbar() {

    return (
        <div className='navbarContainer'>
            <div className="navbarItem">
                <div className="navbarLogo">
                    <img src="/assets/coffee-beans.svg" alt="" />
                </div>
                <Link to={'/'} className="navbarText">Coffee house</Link>
            </div>
            <Link to={'/ourcoffee'} className="navbarItem">Our coffee</Link>
            <Link to={'/about'} className="navbarItem">For your pleasure</Link>
        </div>
    );
}

export default Navbar;