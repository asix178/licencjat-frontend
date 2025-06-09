import React from 'react';
import '../styles/Header.css';
import {useNavigate} from "react-router-dom";
import {useWinnerSocket} from "../hooks/useWinnerSocket";
import {parseJwt} from "../utils/jwt";

const Header = ({header, to}) => {
    const navigate = useNavigate();

    const token = localStorage.getItem('jwt');
    const uuid = parseJwt(token)?.userId;

    useWinnerSocket(uuid, (msg) => {
        alert(`🎉 Gratulacje! Odbierz nagrodę główną! Wygrywający los: ${msg.number}`);
    });


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
