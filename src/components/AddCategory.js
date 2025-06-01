import React, { useState } from 'react';
import '../styles/Home.css';
import Header from "./Header";

const AddCategory = () => {
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        if (!name.trim()) {
            alert('Nazwa nie może być pusta.');
            return;
        }
        const confirmed = window.confirm(`Czy na pewno dodać kategorię: ${name}?`);
        if (confirmed) {

            try {
                const response = await fetch('http://localhost:8080/category', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({name: name.trim()})
                });

                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }

                console.log('Dodano kategorię:', name);
                alert('Dodano kategorię');
                setName('');
            } catch (error) {
                console.error('Failed to add category:', error);
                alert('Error adding category. See console for details.');
            }


        }


    };

    return (
        <div><Header header ={"Administrator"} to="/administrator/zarzadzaj"/>
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
        </div>
    );
};

export default AddCategory;
