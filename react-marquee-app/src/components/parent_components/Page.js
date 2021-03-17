import React from 'react';

import Headline from '../child_components/Headline';
import Subhead from '../child_components/Subhead';
import CallToAction from '../child_components/CallToAction';

const Page = props => {

    return (
        <div className='page-ui'>
            <Headline selectedObj={props.selected} />
            <Subhead selectedObj={props.selected} />
            <CallToAction selectedObj={props.selected} />
        </div>
    );
};

export default Page;