import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "./Header";

const AdminLogin = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        if (!login.trim() || !password.trim()) {
            alert('Uzupełnij wszystkie pola.');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/administrator', {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({login, password}),
            });

            if (response.ok) {
                const token = await response.text();
                localStorage.setItem('admin_jwt', token);
                navigate('/administrator');
            } else {
                alert('Nieprawidłowy login lub hasło.');
            }
        } catch (err) {
            console.error(err);
            alert('Wystąpił błąd podczas logowania.');
        }
    };


    return (
        <div><Header header={"Panel Administratora"} to="/"/>
            <div style={{padding: '40px', maxWidth: '400px', margin: 'auto'}}>
                <h2>Logowanie Administratora</h2>
                <input
                    type="text"
                    placeholder="Login"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                    style={{width: '100%', padding: '10px', marginBottom: '15px'}}
                />
                <input
                    type="password"
                    placeholder="Hasło"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{width: '100%', padding: '10px', marginBottom: '20px'}}
                />
                <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <button className="home-button" onClick={handleLogin}>Zaloguj</button>
                </div>
            </div>
        </div>
    );
};

export default AdminLogin;
