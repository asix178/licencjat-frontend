import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const FindTicketVolunteer = () => {
    const [number, setNumber] = useState('');
    const navigate = useNavigate();

    const handleSearch = async () => {
        const trimmed = number.trim();
        if (!trimmed) {
            alert('Podaj numer losu.');
            return;
        }

        try {
            const res = await fetch(`http://localhost:8080/ticket/number/${trimmed}`);
            if (!res.ok) {
                alert('Los nie znaleziony.');
                return;
            }

            navigate(`/wolontariusz/bilet/${trimmed}`);
        } catch (error) {
            console.error('Błąd podczas wyszukiwania:', error);
            alert('Wystąpił błąd. Sprawdź konsolę.');
        }
    };

    return (
        <div><Header header ={"Wolontariusz"} to="/wolontariusz"/>
            <div style={{ padding: '20px' }}>
                <h2>Wyszukaj los</h2>
                <input
                    type="text"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Wpisz numer losu"
                    style={{ padding: '8px', width: '250px', marginRight: '10px' }}
                />
                <button className="home-button" onClick={handleSearch}>Wyszukaj</button>
            </div>
        </div>
    );
};

export default FindTicketVolunteer;
