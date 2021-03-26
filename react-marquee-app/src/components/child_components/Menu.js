import React from 'react';


const Menu = props => {


    function handleClick(event) {
        event.preventDefault();
        //console.log("innerText: ", event.target.innerText);
        // to ignore console dev tools alert regarding filter we place the below rule in comments:
        // eslint-disable-next-line
        const selectedContent = props.checkSelected.filter(ele => {
            if (ele.title === event.target.innerText) {
                return ele;
            }
        });
        // console.log("selectedContent: ", selectedContent);
        props.parentCB(selectedContent);
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