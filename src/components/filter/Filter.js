import './filter.css';
import { coffeeData } from '../data/coffeeData';
import { btnData } from '../data/btnData';

function Filter({ setData }) {

    const filterItems = (value) => {
        if (value !== '') {
            const filteredData = coffeeData.filter((item) => {
                return Object.values(item.desc).join('').toLowerCase().includes(value.toLowerCase())
            })
            setData(filteredData);
        } else {
            setData(coffeeData);
        }
    }

    const filterClick = (country) => {
        return () => {
            if (country) {
                const filteredData = coffeeData.filter((item) => {
                    return Object.values(item.country).join('').toLowerCase().includes(country.toLowerCase())
                })
                setData(filteredData);
            } else {
                setData(coffeeData);
            }
        }
    }

    return (
        <div className="filter">
            <div className="container">
                <div className="filteWrapper">
                    <div className="filterTitle">Lookiing for</div>
                    <input
                        type="text"
                        placeholder='start typing here...'
                        className="filterInput"
                        onChange={(e) => filterItems(e.target.value)} />
                    <div className="filterTitle">Or filter</div>
                    {btnData.map((item) => (
                        <button onClick={filterClick(item.value)} className="filterBtn" key={item.id}>{item.name}</button>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Filter;