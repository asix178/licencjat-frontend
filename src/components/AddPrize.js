import React, { useState, useEffect } from 'react';
import '../styles/Home.css';

const AddPrize = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setCategories([
            { id: 'uuid-1', name: 'Elektronika' },
            { id: 'uuid-2', name: 'Dom i ogród' }
        ]);
    }, []);

    const handleSubmit = () => {
        if (!name.trim() || !amount || !category || Number(amount) < 1) {
            alert('Wszystkie pola są wymagane i ilość musi być większa od 0.');
            return;
        }
        const confirmed = window.confirm(`Czy na pewno dodać nagrodę: ${name}?`);
        if (confirmed) {
            console.log('Dodano nagrodę:', { name, category, amount });
            setName('');
            setAmount('');
            setCategory('');
        }
    };

    return (
        <div className="home">
            <h2>Dodaj nagrodę</h2>
            <input
                type="text"
                className="home-button"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ padding: '10px', marginBottom: '15px' }}
            />
            <select
                className="home-button"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                style={{ padding: '10px', marginBottom: '15px' }}
            >
                <option value="">Wybierz kategorię</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                ))}
            </select>
            <input
                type="number"
                className="home-button"
                placeholder="Ilość"
                min="1"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                style={{ padding: '10px', marginBottom: '15px' }}
            />
            <button className="home-button" onClick={handleSubmit}>Dodaj</button>
        </div>
    );
};

export default AddPrize;
