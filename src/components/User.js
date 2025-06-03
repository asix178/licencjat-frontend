import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Home.css';
import Header from "./Header";

const User = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("jwt");
        navigate('/uzytkownik/logowanie');
    };

    return (
        <div><Header header={"Panel Użytkownika"} to="/uzytkownik"/>
            <div style={{padding: '40px', textAlign: 'center'}}>


                <main className="home">
                    <button className="home-button" onClick={() => navigate('/uzytkownik/scan')}>
                        Skanuj QR
                    </button>

                    <button className="home-button" onClick={() => navigate('/uzytkownik/wpisz-numer')}>
                        Wpisz numer losu
                    </button>

                    <button className="home-button" onClick={() => navigate('/uzytkownik/moje-losy')}>
                        Moje Losy
                    </button>

                    <button className="logout-button" onClick={handleLogout}>
                        Wyloguj
                    </button>
                </main>
            </div>
        </div>
    );
};

export default User;
