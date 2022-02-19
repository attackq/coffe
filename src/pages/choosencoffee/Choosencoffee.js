import Coffeedesc from "../../components/coffeedesc/Coffeedesc";
import Smallheader from "../../components/smallheader/Smallheader";
import Footer from "../../components/footer/Footer";


import './choosencoffee.css';

function Choosencoffee(props) {
    return (
        <>
            <Smallheader bg={'ourcoffe'} title={'Our Coffee'} />
            <Coffeedesc />
            <Footer />
        </>
    );
}

export default Choosencoffee;