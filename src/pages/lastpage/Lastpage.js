import Content from "../../components/content/Content";
import Smallheader from "../../components/smallheader/Smallheader";
import { contentData } from '../../components/data/contentData';
import Coffeelist from "../../components/coffeelist/Coffeelist";
import Footer from "../../components/footer/Footer";

function Lastpage(props) {
    return (
        <>
            <Smallheader bg={'for-your'} title={'For Your Pleasure'} />
            <Content img={contentData[1].img}
                title={contentData[1].title}
                subtitle={contentData[1].subtitle}
                suptitle={contentData[1].suptitle} />
            <Coffeelist />
            <Footer />
        </>
    );
}

export default Lastpage;