import React from 'react';
import '../styles/Home.css';
import {useNavigate} from "react-router-dom";
import Header from "./Header";

const MainDraw = () => {
    const navigate = useNavigate();

    const handleScanQR = () => {
        navigate('/administrator/glowne/scan');
    };

    const handleEnterNumber = () => {
        navigate('/administrator/glowne/wpisz-numer');
    };

    return (
        <div><Header header ={"Administrator"}/>
        <div style={{ padding: '20px' }}>
            <h2>Losowanie główne</h2>

            <div className="home">
                <button className="home-button" onClick={handleScanQR}>
                    Skanuj QR
                </button>
                <button className="home-button" onClick={handleEnterNumber}>
                    Wpisz numer
                </button>
            </div>
        </div>
        </div>
    );
};

export default MainDraw;
