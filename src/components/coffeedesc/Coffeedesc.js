import './coffeedesc.css';
import Aboutlogo from '../aboutlogo/Aboutlogo';
import { coffeeData } from '../data/coffeeData';
import { useLocation } from 'react-router-dom';

function Coffeedesc() {
    const location = useLocation();
    const pathID = location.pathname.slice(-1);
    const item = coffeeData.filter((item) => item.id === +pathID)[0];
    return (
        <div className="coffeedesc">
            <div className="container">
                <div className="coffeeWrapper">
                    <div className="coffeeItem">
                        <div className="coffeeImg">
                            <img src={item.img} alt="" />
                        </div>
                    </div>
                    <div className="coffeeItem">
                        <div className="itemLogo">
                            <div className="coffeeTitle">About it</div>
                            <Aboutlogo black />
                        </div>
                        <div className="itemText">
                            <div className="itemCountry"><span>Country:</span> {item.country}</div>
                            <div className="itemDescr"><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className="itemPrice"><span>Price:</span>{item.price}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Coffeedesc;