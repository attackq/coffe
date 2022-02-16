import './navbar.css';
import { Link } from "react-router-dom";

function Navbar({ colored, pos }) {
    let navbarClasses = 'navbarItem';
    if (colored) {
        navbarClasses += ' black';
    }
    let posClass = 'navbar';
    let imgSrc = '/assets/coffee-beans.svg';
    if (pos) {
        posClass += ' footer';
        imgSrc = '/assets/coffee-beans-black.svg';
    }
    return (
        <div className={posClass}>
            <div className={navbarClasses}>
                <div className="navbarLogo">
                    <img src={imgSrc} alt="" />
                </div>
                <Link to={'/'} className="navbarText">Coffee house</Link>
            </div>
            <Link to={'/ourcoffee'} className={navbarClasses}>Our coffee</Link>
            <Link to={'/about'} className={navbarClasses}>For your pleasure</Link>
        </div>
    );
}

export default Navbar;