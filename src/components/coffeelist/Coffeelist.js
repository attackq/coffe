import './coffeelist.css';
import '../ourbest/ourbest.css';
import { Link } from "react-router-dom";

const coffeeData = [
    {
        img: '/assets/item1.jpg',
        desc: 'Solimo Coffee Beans 2 kg',
        price: '10.73$'
    },
    {
        img: '/assets/item2.jpg',
        desc: 'Solimo Coffee Beans 2 kg',
        price: '15.99$'
    },
    {
        img: '/assets/item3.jpg',
        desc: 'Solimo Coffee Beans 2 kg',
        price: '6.99$'
    },
    {
        img: '/assets/item3.jpg',
        desc: 'Solimo Coffee Beans 2 kg',
        price: '6.99$'
    },
    {
        img: '/assets/item3.jpg',
        desc: 'Solimo Coffee Beans 2 kg',
        price: '6.99$'
    },
    {
        img: '/assets/item3.jpg',
        desc: 'Solimo Coffee Beans 2 kg',
        price: '6.99$'
    }
]

function Coffeelist(props) {
    return (
        <div className="coffeeList">
            <div className="container">
                <Link to={'/coffeeItem'} className="listWrapper">
                    {coffeeData.map((item, ind) => (
                        <div className="listItem" key={ind}>
                            <div className="listImg">
                                <img src={item.img} alt="best1" />
                            </div>
                            <div className="listDesc">{item.desc}</div>
                            <div className="listPrice">{item.price}</div>
                        </div>
                    ))}
                </Link>
            </div>
        </div>
    );
}

export default Coffeelist;