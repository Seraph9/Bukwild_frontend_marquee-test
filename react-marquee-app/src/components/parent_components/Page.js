import React from 'react';

import Headline from '../child_components/Headline';
import Subhead from '../child_components/Subhead';
import CallToAction from '../child_components/CallToAction';

const Page = () => {

    return (
        <div className='page-ui'>
            <Headline />
            <Subhead />
            <CallToAction />
        </div>
    );
};

export default Page;