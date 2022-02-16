import Aboutlogo from '../aboutlogo/Aboutlogo';
import './content.css';

function Content() {
    return (
        <div className="content">
            <div className="container">
                <div className="contentWrapper">
                    <div className="contentItem">
                        <img className='contentImg' src="/assets/girl.png" alt="" />
                    </div>
                    <div className="contentItem">
                        <div className="contentTitle">About our beans</div>
                        <Aboutlogo black />
                        <div className="contentSuptitle">Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible. <br /><br />
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions.
                            As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.</div>
                    </div>
                </div>
                <div className="contentLine"></div>
            </div>
        </div>
    );
}

export default Content;