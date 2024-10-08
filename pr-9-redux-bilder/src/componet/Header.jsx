import React from 'react';
import Add from '../pages/Add';
import View from '../pages/View';
import './header.css'; 

const Header = () => {
    return (
        <div>
            <header>
                <h2>Google Keep</h2>
            </header>
            <Add />
            <View />
        </div>
    );
};

export default Header;