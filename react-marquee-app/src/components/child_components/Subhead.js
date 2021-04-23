import React from 'react';

const Subhead = props => {
    const subhead = props.selectedObj ? props.selectedObj.blocks[0].subhead : "Subhead loading...";
    if (props.selectedObj) {
        return (
            <div className='subhead'>
                {subhead}
            </div>
        )
    } else {
        return (
            <div className='subhead'>
                {props.initialLoad[0].blocks[0].subhead}
            </div>
        )
    }
};

export default Subhead;