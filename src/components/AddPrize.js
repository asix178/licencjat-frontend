import React, {useState, useEffect} from 'react';
import '../styles/Home.css';
import Header from "./Header";

const AddPrize = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const res = await fetch('http://localhost:8080/category');
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setCategories(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        fetchCategories();
    }, []);

    const handleCategoryChange = (e) => {
        setSelectedCategoryId(e.target.value);
    };

    const handleSubmit = async () => {
        if (!name.trim() || !amount || !selectedCategoryId || Number(amount) < 1) {
            alert('Wszystkie pola są wymagane i ilość musi być większa od 0.');
            return;
        }
        const confirmed = window.confirm(`Czy na pewno dodać nagrodę: ${name}?`);
        if (confirmed) {
            const payload = {
                name: name.trim(),
                amount: Number(amount),
                categoryId: selectedCategoryId
            };

            try {
                const res = await fetch('http://localhost:8080/prize', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                console.log('Dodano nagrodę:', name);
                alert('Dodano nagrodę');

                // Reset form
                setName('');
                setAmount('');
                setSelectedCategoryId('');
            } catch (error) {
                console.error('Error sending prize:', error);
                alert('Failed to add prize. Check console for errors.');
            }
        }
    };

    return (
        <div><Header header ={"Administrator"}/>
        <div className="home">
            <h2>Dodaj nagrodę</h2>
            <input
                type="text"
                className="home-button"
                placeholder="Nazwa"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{padding: '10px', marginBottom: '15px'}}
            />
            <select
                className="home-button"
                value={selectedCategoryId}
                onChange={handleCategoryChange}
                style={{padding: '10px', marginBottom: '15px'}}
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
                style={{padding: '10px', marginBottom: '15px'}}
            />
            <button className="home-button" onClick={handleSubmit}>Dodaj</button>
        </div>
        </div>
    );
};

export default AddPrize;
