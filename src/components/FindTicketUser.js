import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const FindTicketUser = () => {
    const [ticketNumber, setTicketNumber] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        const trimmed = ticketNumber.trim();
        if (!trimmed) {
            alert('Wpisz numer losu');
            return;
        }

        navigate(`/uzytkownik/bilet/${trimmed}`);
    };

    return (
        <div><Header header={"Użytkownik"} to="/uzytkownik"/>
            <div style={{padding: '20px'}}>
                <h2>Wpisz numer losu</h2>
                <input
                    type="text"
                    value={ticketNumber}
                    onChange={(e) => setTicketNumber(e.target.value)}
                    placeholder="Numer losu"
                    style={{padding: '8px', marginRight: '10px'}}
                />
                <button className="home-button" onClick={handleSearch}>Dodaj</button>
            </div>
        </div>
            );
            };

            export default FindTicketUser;
