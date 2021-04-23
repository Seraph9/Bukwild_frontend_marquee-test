import React from 'react';

import Headline from '../child_components/Headline';
import Subhead from '../child_components/Subhead';
import CallToAction from '../child_components/CallToAction';

const Page = props => {

    return (
        <div className='page-ui'>
            <Headline selectedObj={props.selected} initialLoad={props.initialLoad} />
            <Subhead selectedObj={props.selected} initialLoad={props.initialLoad} />
            <CallToAction selectedObj={props.selected} initialLoad={props.initialLoad} />
        </div>
    )
};

export default Page;