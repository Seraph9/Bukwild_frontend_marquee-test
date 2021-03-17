import React from 'react';

const CallToAction = props => {
    const cta = props.selectedObj ? props.selectedObj.blocks[0].cta : "no call to action";
    return (
        <div className='cta'>
            {cta}
        </div>
    );
};

export default CallToAction;