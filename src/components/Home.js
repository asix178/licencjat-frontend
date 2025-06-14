import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css'; // Jeśli stylujesz przyciski klasą .home-button

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home" style={{ padding: '40px', textAlign: 'center' }}>
            <h1>Witaj w Loteriadzie 🎟️</h1>

            <div className="home">
                <button className="home-button" onClick={() => navigate('/administrator/logowanie')}>
                    Administrator
                </button>

                <button className="home-button" onClick={() => navigate('/wolontariusz/logowanie')}>
                    Wolontariusz
                </button>

                <button className="home-button" onClick={() => navigate('/uzytkownik/logowanie')}>
                    Użytkownik
                </button>
            </div>
        </div>
    );
};

export default Home;
