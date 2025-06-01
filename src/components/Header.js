import React from 'react';
import '../styles/Header.css';
import {useNavigate} from "react-router-dom";

const Header = ({header, to}) => {
    const navigate = useNavigate();

    return (
        <header className="header">
                <button className="back-button" onClick={() => navigate(to)}>
                    ←
                </button>
            <h1 className="header-title">{header}</h1>
        </header>
    );
};

export default Header;
