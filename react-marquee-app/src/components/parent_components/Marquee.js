import React from 'react';

import Header from './Header';
import Page from './Page';

const Marquee = () => {
    return (
        <div className='marquee' style={{
            minHeight: '100vh',
            backgroundImage: `url('images/backgrounds/slide_one.jpg')`
        }}>
            <Header />
            <Page />
        </div>
    );
};

export default Marquee;