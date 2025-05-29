import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <main className="home">
            <button className="home-button" onClick={() => navigate('/zarzadzaj')}>
                Zarządzaj loterią
            </button>
            <button className="home-button" onClick={() => navigate('/glowne')}>
                Losowanie Główne
            </button>
            <button className="logout-button">Wyloguj</button>
        </main>
    );
};

export default Home;
