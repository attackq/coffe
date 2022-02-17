import Aboutlogo from '../aboutlogo/Aboutlogo';
import './content.css';

function Content({ img, title, subtitle, suptitle }) {
    return (
        <div className="content">
            <div className="container">
                <div className="contentWrapper">
                    <div className="contentItem">
                        <img className='contentImg' src={img} alt="" />
                    </div>
                    <div className="contentItem">
                        <div className="contentTitle">{title}</div>
                        <Aboutlogo black />
                        <div className="contentSubtitle">{subtitle}</div>
                        <div className="contentSuptitle">{suptitle}</div>
                    </div>
                </div>
                <div className="contentLine"></div>
            </div>
        </div>
    );
}

export default Content;