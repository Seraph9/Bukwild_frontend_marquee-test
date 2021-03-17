import React, { useState, useEffect } from 'react';

import Headline from '../child_components/Headline';
import Subhead from '../child_components/Subhead';
import CallToAction from '../child_components/CallToAction';

const Page = () => {
    const [contents, setContents] = useState();
    const getData = () => {
        const data = fetch('data.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then(function (data) {
                console.log(data);
                setContents(data);
            })
            .catch(error => console.error(error));
        return data;

    };

    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='page-ui'>
            {contents !== null ? <Headline data={contents} /> : "Heeadline still loading!"}
            <Subhead />
            <CallToAction />
        </div>
    );
};

export default Page;