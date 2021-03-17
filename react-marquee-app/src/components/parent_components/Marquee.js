import React, { useState, useContext } from 'react';

import Header from './Header';
import Page from './Page';
import DataContext from '../../DataContext';

const Marquee = props => {
    const [parentData, setParentData] = useState();
    const dataArray = useContext(DataContext);
    console.log("marquee: ", dataArray);
    // const background = dataObject ? dataObject.pages.map(page => page.blocks.map(block => block.background)) : "loading";
    // console.log(background);
    function parentCallback(childData) {
        // [...we will use the dataFromChild here...]
        console.log("childData: ", childData);

        let selectedArray = childData.blocks !== undefined ? childData.blocks : ['slide_two.jpg'];
        console.log("selectedArray: ", selectedArray);
        // setParentData(selectedArray);
        setParentData(selectedArray.pop());
        console.log('parentdata: ', parentData)

    }
    // NOTE BENE: the backgroundImage url is correct now
    return (
        /* <DataContext.Consumer> */
        <div className='marquee' style={{
            minHeight: '100vh',
            backgroundImage: parentData && parentData.length > 0 ? `url('images/backgrounds/${parentData}')` : `url('images/backgrounds/slide_one.jpg')`
        }}>
            <Header parentCB={parentCallback} checkSelected={props.checkSelected} />
            <Page />
        </div>
        /* </DataContext.Consumer> */
    );
};

export default Marquee;