import React from 'react';

const Headline = props => {
    const headline = props.selectedObj ? props.selectedObj.blocks[0].headline : "Headline still loading!";
    return (
        <div className='headline'>
            {headline}
        </div>
    );
};

export default Headline;