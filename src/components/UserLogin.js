import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from "./Header";

const UserLogin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!login.trim() || !password.trim()) {
            alert('Uzupełnij wszystkie pola.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/uzytkownik', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login, password }),
            });

            if (response.ok) {
                const token = await response.text();
                localStorage.setItem('jwt', token);
                navigate('/uzytkownik');
            } else {
                alert('Nieprawidłowy login lub hasło.');
            }
        } catch (err) {
            console.error('Błąd podczas logowania:', err);
            alert('Wystąpił błąd. Sprawdź połączenie z serwerem.');
        }
    };

    const handleRegisterRedirect = () => {
        navigate('/uzytkownik/rejestracja');
    };

    return (
        <div><Header header={"Panel Użytkownika"} to="/"/>
            <div style={{padding: '40px', maxWidth: '400px', margin: 'auto'}}>
                <h2>Logowanie Użytkownika</h2>

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

                <div className="home">
                    <button className="home-button" onClick={handleLogin}>
                        Zaloguj
                    </button>
                    <button className="home-button" onClick={handleRegisterRedirect}>
                        Zarejestruj
                    </button>
                </div>
            </div>
        </div>
            );
            };

            export default UserLogin;
