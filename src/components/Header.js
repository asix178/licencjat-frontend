import React from 'react';
import '../styles/Header.css';

const Header = ({header}) => {
    return (
        <header className="header">
            <h1>{header}</h1>
        </header>
    );
};

export default Header;
