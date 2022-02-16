import '../container.css';
import './ourbest.css';

const cardData = [
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
    }
]

function Ourbest(props) {
    return (
        <div className='ourbest'>
            <div className="container">
                <div className="ourbestTitle">Our best</div>
                <div className="ourbestItems">
                    {cardData.map((item, ind) => (
                        <div className="ourbestItem" key={ind}>
                            <div className="itemImg">
                                <img src={item.img} alt="best1" />
                            </div>
                            <div className="itemDesc">{item.desc}</div>
                            <div className="itemPrice">{item.price}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Ourbest;