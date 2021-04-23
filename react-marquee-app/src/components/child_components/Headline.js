import React from 'react';

const Headline = props => {
    // console.log("initial: ", props.initialLoad)
    const headline = props.selectedObj ? props.selectedObj.blocks[0].headline : 'Headline loading...';
    if (props.selectedObj) {
        return (
            <div className='headline'>
                {headline}
            </div>
        )
    } else {
        return (
            <div className='headline'>
                {props.initialLoad[0].blocks[0].headline}
            </div>
        )
    }
};

export default Headline;