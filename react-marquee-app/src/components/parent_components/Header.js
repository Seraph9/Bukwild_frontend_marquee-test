import React from 'react';

import Logo from '../child_components/Logo';
import Menu from '../child_components/Menu';
import Button from '../child_components/Button';

const Header = () => {
    return (
        <div className='layout-ui'>
            <Logo />
            <Menu />
            <Button />
        </div>
    );
};

export default Header;