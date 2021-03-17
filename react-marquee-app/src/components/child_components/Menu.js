import React, { useContext } from 'react';

import DataContext from '../../DataContext';

const Menu = props => {
    const dataArray = useContext(DataContext);

    function handleClick(event) {
        event.preventDefault();
        console.log("innerText: ", event.target.innerText);
        const selectedContent = props.checkSelected.filter(ele => {
            if (ele.title === event.target.innerText) {
                return ele;
            }
        })
        console.log("selectedContent: ", selectedContent);
        props.parentCall(selectedContent);
    }

    return (
        <div className='menu'>
            <ul>
                <li>
                    <a href='/' onClick={handleClick}>Industries</a>
                </li>
                <li>
                    <a href='/' onClick={handleClick}>Services</a>
                </li>
                <li>
                    <a href='/' onClick={handleClick}>About Us</a>
                </li>
            </ul>
        </div>
    );
};

export default Menu;