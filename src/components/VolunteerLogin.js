import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

const VolunteerLogin = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!name.trim() || !password.trim()) {
            alert('Uzupełnij wszystkie pola.');
            return;
        }

        try {
            const res = await fetch('http://localhost:8080/volunteer', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name, password}),
            });

            if (res.ok) {
                const token = await res.text();
                localStorage.setItem('vol_jwt', token);
                navigate('/wolontariusz');
            } else {
                alert('Nieprawidłowy login lub hasło.');
            }
        } catch (err) {
            console.error('Błąd logowania:', err);
            alert('Wystąpił błąd podczas logowania.');
        }
    };

    const handleRedirect = () => {
        navigate('/wolontariusz/rejestracja');
    };

    return (
        <div><Header header={"Panel Wolontariusza"} to="/"/>
            <div style={{padding: '40px', maxWidth: '400px', margin: 'auto'}}>
                <h2>Logowanie Wolontariusza</h2>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <button className="home-button" onClick={handleLogin}>Zaloguj</button>
                    <button className="home-button" onClick={handleRedirect}>Zarejestruj</button>
                </div>
            </div>
        </div>
    );
};

export default VolunteerLogin;
