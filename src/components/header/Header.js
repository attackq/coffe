import './header.css';
import '../container.css';
import Aboutlogo from '../aboutlogo/Aboutlogo';
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header" >
            <div className="container">
                <div className="headerContent">
                    <h1 className="mainCoffee">Everything You Love About Coffee</h1>
                    <Aboutlogo />
                    <h2 className="mainDesc">We makes every day full of energy and taste</h2>
                    <h2 className="mainDesc">Want to try our beans?</h2>
                    <Link to={'/ourcoffee'} className="mainBtn">More</Link >
                </div>
            </div>
        </div >

    );
}

export default Header;