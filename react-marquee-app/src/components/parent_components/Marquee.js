import React, { useContext } from 'react';

import Header from './Header';
import Page from './Page';
import DataContext from '../../DataContext';

const Marquee = () => {
    const dataObject = useContext(DataContext);
    console.log(dataObject);
    const background = dataObject ? dataObject.pages.map(page => page.blocks.map(block => block.background)) : "loading";
    console.log(background);
    return (
        /* <DataContext.Consumer> */
        <div className='marquee' style={{
            minHeight: '100vh',
            // backgroundImage: `url('images/backgrounds/slide_one.jpg')`
            backgroundImage: `url('images/background/' + ${background[0][0]})`
        }}>
            <Header />
            <Page />
        </div>
        /* </DataContext.Consumer> */
    );
};

export default Marquee;