import React from 'react';

const Headline = props => {
    const headline = props.selectedObj ? props.selectedObj.blocks[0].headline : "headline still loading!";
    return (
        <div className='headline'>
            {headline}
        </div>
    );
};

export default Headline;