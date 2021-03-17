import React, { useState } from 'react';

import Header from './Header';
import Page from './Page';

const Marquee = props => {
    const [selectData, setSelectData] = useState();

    function selectedCallback(childData) {

        //console.log("childData: ", childData);

        // let selectedArray = childData ? [...childData] : ['slide_two.jpg']; // this way works too
        let selectedArray = childData ? childData : ['slide_two.jpg'];
        //console.log("selectedArray: ", selectedArray);

        setSelectData(selectedArray.pop());

    }
    console.log('selectdata: ', selectData)
    // NOTE BENE: the backgroundImage url syntax is correct now
    // && parentData.blocks.length > 0 (as an additional check in backgroundImage below if using the first selectedArray variable commented out line in function parentCallback)
    return (


        <div className='marquee' style={{
            minHeight: '100vh',
            backgroundImage: selectData ? `url('images/backgrounds/${selectData.blocks[0].background}')` : `url('images/backgrounds/slide_one.jpg')`
        }}>
            <Header parentCB={selectedCallback} checkSelected={props.checkSelected} />
            <Page selected={selectData} />
        </div>

    );
};

export default Marquee;