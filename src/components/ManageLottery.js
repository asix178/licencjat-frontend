import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

const ManageLottery = () => {
    const navigate = useNavigate();

    const handleGenerate = () => {
        const confirmed = window.confirm('Czy na pewno chcesz wygenerować losy?');
        if (confirmed) {
            console.log('Losy wygenerowane');
            // tutaj dodaj logikę generowania
        }
    };

    const handleDelete = () => {
        const confirmed = window.confirm('Czy na pewno chcesz usunąć wszystkie dane?');
        if (confirmed) {
            console.log('Dane usunięte');
            // tutaj dodaj logikę usuwania
        }
    };

    return (
        <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <h2>Zarządzaj Loterią</h2>
            <button className="home-button" onClick={() => navigate('/zarzadzaj/kategoria')}>Dodaj kategorię losów</button>
            <button className="home-button" onClick={() => navigate('/zarzadzaj/nagrody')}>Dodaj nagrody</button>
            <button className="home-button" onClick={() => navigate('/zarzadzaj/listanagrod')}>Lista nagród</button>
            <button className="home-button" onClick={handleGenerate}>Wygeneruj losy</button>
            <button className="home-button" onClick={handleDelete}>Usuń dane</button>
        </div>
    );
};

export default ManageLottery;
