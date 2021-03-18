import React from 'react';

const Subhead = props => {
    const subhead = props.selectedObj ? props.selectedObj.blocks[0].subhead : "Subhead loading...";
    return (
        <div className='subhead'>
            {subhead}
        </div>
    );
};

export default Subhead;