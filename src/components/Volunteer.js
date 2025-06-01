import React from 'react';
import Header from "./Header";
import '../styles/Home.css';
import {useNavigate} from "react-router-dom";

const Volunteer = () => {
    const navigate = useNavigate();

    const handleScanQR = () => {
        navigate('/wolontariusz/scan');
    };

    const handleEnterNumber = () => {
        navigate('/wolontariusz/wpisz-numer');
    };

    return <div><Header header={"Wolontariusz"} to="/"/>
        <div style={{padding: '20px'}}>
            <h2>Losowanie główne</h2>

            <div className="home">
                <button className="home-button" onClick={handleScanQR}>
                    Skanuj QR
                </button>
                <button className="home-button" onClick={handleEnterNumber}>
                    Wpisz numer
                </button>
                <button className="home-button" >
                    Wyloguj
                </button>
            </div>
        </div>
    </div>
};

export default Volunteer;
