import Content from "../../components/content/Content";
import Smallheader from "../../components/smallheader/Smallheader";
import { contentData } from '../../components/data/contentData';
import Filter from "../../components/filter/Filter";
import Coffeelist from "../../components/coffeelist/Coffeelist";
import Footer from "../../components/footer/Footer";
import { useState } from 'react';
import { coffeeData } from '../../components/data/coffeeData';

function Linkedpage() {

    const [data, setData] = useState(coffeeData);

    return (
        <>
            <Smallheader bg={'ourcoffe'} title={'Our Coffee'} />
            <Content img={contentData[0].img}
                title={contentData[0].title}
                subtitle={contentData[0].subtitle}
                suptitle={contentData[0].suptitle} />
            <Filter setData={setData} />
            <Coffeelist data={data} />
            <Footer />
        </>
    );
}

export default Linkedpage;