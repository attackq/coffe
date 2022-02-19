import '../container.css';
import './ourbest.css';
import { cardData } from '../data/cardData';
import { Link } from "react-router-dom";



function Ourbest(props) {
    return (
        <div className='ourbest'>
            <div className="container">
                <div className="ourbestTitle">Our best</div>
                <div className="ourbestItems">
                    {cardData.map((item, ind) => (
                        <Link to={`/coffeeItem/${item.id}`} className="ourbestItem" key={ind}>
                            <div className="itemImg">
                                <img src={item.img} alt="best1" />
                            </div>
                            <div className="itemDesc">{item.desc}</div>
                            <div className="itemPrice">{item.price}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ourbest;