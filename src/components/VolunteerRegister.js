import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const VolunteerRegister = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!name.trim() || !password.trim() || !code.trim()) {
            alert('Wypełnij wszystkie pola.');
            return;
        }

        if (code !== 'LOTERIADA2025') {
            alert('Nieprawidłowy kod rejestracyjny.');
            return;
        }

        try {
            const res = await fetch('http://localhost:8080/volunteer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, password }),
            });

            if (res.ok) {
                alert('Rejestracja zakończona sukcesem.');
                navigate('/wolontariusz/logowanie');
            } else {
                const msg = await res.text();
                alert(`Błąd rejestracji: ${msg}`);
            }
        } catch (err) {
            console.error('Błąd rejestracji:', err);
            alert('Wystąpił błąd podczas rejestracji.');
        }
    };

    return (
        <div>
            <Header header="Panel Wolontariusza" to="/wolontariusz/logowanie" />
            <div style={{ padding: '40px', maxWidth: '400px', margin: 'auto' }}>
                <h2>Rejestracja Wolontariusza</h2>

                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Login"
                    style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                    style={{ width: '100%', padding: '10px', marginBottom: '15px' }}
                />

                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Kod rejestracyjny"
                    style={{ width: '100%', padding: '10px', marginBottom: '20px' }}
                />

                <button className="home-button" onClick={handleRegister}>
                    Zarejestruj
                </button>
            </div>
        </div>
    );
};

export default VolunteerRegister;
