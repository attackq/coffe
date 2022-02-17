import Content from "../../components/content/Content";
import Smallheader from "../../components/smallheader/Smallheader";
import { contentData } from '../../components/data/contentData';
import Filter from "../../components/filter/Filter";
import Coffeelist from "../../components/coffeelist/Coffeelist";
import Footer from "../../components/footer/Footer";

function Linkedpage() {
    return (
        <>
            <Smallheader bg={'ourcoffe'} title={'Our Coffee'} />
            <Content img={contentData[0].img}
                title={contentData[0].title}
                subtitle={contentData[0].subtitle}
                suptitle={contentData[0].suptitle} />
            <Filter />
            <Coffeelist />
            <Footer />
        </>
    );
}

export default Linkedpage;