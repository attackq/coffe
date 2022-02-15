import '../container.css';
import './ourbest.css';

function Ourbest(props) {
    return (
        <div className='ourbest'>
            <div className="container">
                <div className="ourbestTitle">Our best</div>
                <div className="ourbestItems">
                    <div className="ourbestItem">
                        <div className="itemImg">
                            <img src="/assets/item1.jpg" alt="best1" />
                        </div>
                        <div className="itemDesc">Solimo Coffee Beans 2 kg</div>
                        <div className="itemPrice">10.73$</div>
                    </div>
                    <div className="ourbestItem">
                        <div className="itemImg">
                            <img src="/assets/item2.jpg" alt="best2" />
                        </div>
                        <div className="itemDesc">Presto Coffee Beans 1 kg</div>
                        <div className="itemPrice">15.99$</div>
                    </div>
                    <div className="ourbestItem">
                        <div className="itemImg">
                            <img src="/assets/item3.jpg" alt="best3" />
                        </div>
                        <div className="itemDesc">AROMISTICO Coffee 1 kg</div>
                        <div className="itemPrice">6.99$</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Ourbest;