import './coffeelist.css';
import '../ourbest/ourbest.css';
import { Link } from "react-router-dom";


function Coffeelist({ data }) {

    return (
        <div className="coffeeList">
            <div className="container">
                <div className="listWrapper">
                    {data.map((item, ind) => (
                        <Link to={`/coffeeItem/${item.id}`} className="listItem" key={ind}>
                            <div className="listImg">
                                <img src={item.img} alt="best1" />
                            </div>
                            <div className="listDesc">{item.desc}</div>
                            <div className="listCountry">{item.country}</div>
                            <div className="listPrice">{item.price}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Coffeelist;