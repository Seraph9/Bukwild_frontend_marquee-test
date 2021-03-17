import React from 'react';

import Logo from '../child_components/Logo';
import Menu from '../child_components/Menu';
import Button from '../child_components/Button';

const Header = props => {

    return (
        <div className='layout-ui'>
            <Logo />
            <Menu parentCall={props.parentCB} checkSelected={props.checkSelected} />
            <Button />
        </div>
    );
};

export default Header;