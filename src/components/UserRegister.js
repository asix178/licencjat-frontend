import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const UserRegister = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!login.trim() || !password.trim()) {
            alert('Wypełnij wszystkie pola.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/uzytkownik', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password }),
            });

            if (response.ok) {
                alert('Rejestracja zakończona sukcesem!');
                navigate('/uzytkownik/logowanie');
            } else {
                const errorText = await response.text();
                alert(`Błąd rejestracji: ${errorText}`);
            }
        } catch (err) {
            console.error('Błąd podczas rejestracji:', err);
            alert('Wystąpił błąd sieci. Spróbuj ponownie.');
        }
    };

    return (
        <div><Header header={"Panel Użytkownika"} to="/uzytkownik/logowanie"/>
            <div style={{padding: '40px', maxWidth: '400px', margin: 'auto'}}>
                <h2>Rejestracja Użytkownika</h2>

                <input
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    placeholder="Login"
                    style={{width: '100%', padding: '10px', marginBottom: '15px'}}
                />

                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Hasło"
                    style={{width: '100%', padding: '10px', marginBottom: '20px'}}
                />

                <button className="home-button" onClick={handleRegister}>
                    Zarejestruj
                </button>
            </div>
        </div>
            );
            };

            export default UserRegister;
