import React, { useState } from 'react';
import '../styles/Home.css';

const AddCategory = () => {
    const [name, setName] = useState('');

    const handleSubmit = () => {
        if (!name.trim()) {
            alert('Nazwa nie może być pusta.');
            return;
        }
        const confirmed = window.confirm(`Czy na pewno dodać kategorię: ${name}?`);
        if (confirmed) {
            console.log('Dodano kategorię:', name);
            setName('');
        }
    };

    return (
        <div className="home">
            <h2>Dodaj kategorię losów</h2>
            <input
                type="text"
                className="home-button"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '10px', marginBottom: '15px' }}
            />
            <button className="home-button" onClick={handleSubmit}>Dodaj</button>
        </div>
    );
};

export default AddCategory;
