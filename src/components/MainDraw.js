import React from 'react';
import '../styles/Home.css';
import {useNavigate} from "react-router-dom";

const MainDraw = () => {
    const navigate = useNavigate();

    const handleScanQR = () => {
        navigate('/administrator/glowne/scan');
    };

    const handleEnterNumber = () => {
        navigate('/administrator/glowne/wpisz-numer');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Main Draw</h2>

            <div className="home">
                <button className="home-button" onClick={handleScanQR}>
                    Skanuj QR
                </button>
                <button className="home-button" onClick={handleEnterNumber}>
                    Wpisz numer
                </button>
            </div>
        </div>
    );
};

export default MainDraw;
