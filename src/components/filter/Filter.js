import './filter.css';

function Filter(props) {
    return (
        <div className="filter">
            <div className="container">
                <div className="filteWrapper">
                    <div className="filterTitle">Lookiing for</div>
                    <input type="text" placeholder='start typing here...' className="filterInput" />
                    <div className="filterTitle">Or filter</div>
                    <button className="filterBtn">Brazil</button>
                    <button className="filterBtn">Kenya</button>
                    <button className="filterBtn">Columbia</button>
                </div>

            </div>
        </div>
    );
}

export default Filter;