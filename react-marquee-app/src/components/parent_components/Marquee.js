import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import Header from './Header';
import Page from './Page';

const transitionStyles = {
    entering: { opacity: 0.4 },
    entered: { opacity: 1 },
    exiting: { opacity: 0.4 },
    exited: { opacity: 1 },
};

const Marquee = props => {
    const [selectData, setSelectData] = useState();
    const [animate, setAnimate] = useState(true);

    function selectedCallback(childData) {

        //console.log("childData: ", childData);

        // let selectedArray = childData ? [...childData] : ['slide_two.jpg']; // this way works too
        let selectedArray = childData ? childData : ['slide_two.jpg'];
        //console.log("selectedArray: ", selectedArray);

        if (childData) {
            setAnimate(!animate);
        }

        setSelectData(selectedArray.pop());

    }
    // console.log('selectdata: ', selectData)
    // NOTE BENE: the backgroundImage url syntax is correct now
    // && parentData.blocks.length > 0 (as an additional check in backgroundImage below if using the first selectedArray variable commented out line in function parentCallback)
    return (

        <Transition in={animate} timeout={300}>
            {state => (
                <div className='marquee' style={{
                    minHeight: '100vh',
                    backgroundImage: selectData ? `url('images/backgrounds/${selectData.blocks[0].background}')` : `url('images/backgrounds/slide_one.jpg')`,
                    transition: `opacity 300ms ease-in-out`,
                    ...transitionStyles[state]
                }}>
                    <Header parentCB={selectedCallback} checkSelected={props.checkSelected} />
                    <Page selected={selectData} />
                </div>
            )}
        </Transition>
    );
};

export default Marquee;