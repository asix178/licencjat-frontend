import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';
import Header from "./Header";

const Administrator = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        navigate('/administrator/logowanie');
    };
    return (
        <div><Header header ={"Administrator"} to="/administrator"/>
        <main className="home">
            <button className="home-button" onClick={() => navigate('/administrator/zarzadzaj')}>
                Zarządzaj loterią
            </button>
            <button className="home-button" onClick={() => navigate('/administrator/glowne')}>
                Losowanie Główne
            </button>
            <button className="logout-button" onClick={handleLogout}>Wyloguj</button>
        </main>
        </div>

    );
};

export default Administrator;
