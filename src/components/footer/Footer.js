import '../container.css';
import './footer.css';
import '../../components/header/header.css'
import Navbar from "../navbar/Navbar";
import Aboutlogo from '../aboutlogo/Aboutlogo';

function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <Navbar colored pos />
                <Aboutlogo black />
            </div>

        </div>
    );
}

export default Footer;