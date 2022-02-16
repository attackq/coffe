import './smallheader.css';
function Smallheader({ bg, title }) {
    return (
        <div className="smheader" style={{
            backgroundImage: `url('/assets/${bg}.jpg')`
        }}>
            <div className="container">
                <h1 className="smheaderTitle">{title}</h1>
            </div>
        </div>
    );
}

export default Smallheader;