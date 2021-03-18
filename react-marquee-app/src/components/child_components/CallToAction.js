import React from 'react';

const CallToAction = props => {
    const cta = props.selectedObj ? props.selectedObj.blocks[0].cta : "no call to action";
    return (
        <div className='cta'>
            {cta}
            <a href='/' className='cta-link'>LET'S TALK.<img src='images/arrow2.jpeg' className='arrow' alt='yellow right-pointing arrow' /></a>
        </div>
    );
};

export default CallToAction;