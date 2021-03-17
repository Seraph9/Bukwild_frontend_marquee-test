import React from 'react';

const Headline = props => {
    const headline = props.data ? props.data.pages.map(page => page.blocks.map(block => block.headline)) : ["no headline yet"];
    return (
        <div className='headline'>
            <marquee>This is the headline: {headline.map(arr => arr[0])}</marquee>
        </div>
    );
};

export default Headline;