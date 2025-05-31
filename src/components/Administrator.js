import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Administrator = () => {
    const navigate = useNavigate();

    return (
        <main className="home">
            <button className="home-button" onClick={() => navigate('/administrator/zarzadzaj')}>
                Zarządzaj loterią
            </button>
            <button className="home-button" onClick={() => navigate('/administrator/glowne')}>
                Losowanie Główne
            </button>
            <button className="logout-button">Wyloguj</button>
        </main>
    );
};

export default Administrator;
