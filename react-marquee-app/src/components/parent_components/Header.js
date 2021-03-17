import React from 'react';

import Logo from '../child_components/Logo';
import Menu from '../child_components/Menu';

const Header = () => {
    return (
        <div class='layout-ui'>
            <Logo />
            <Menu />
        </div>
    );
};

export default Header;