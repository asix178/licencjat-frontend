import React, { useEffect, useState } from 'react';
import { parseJwt } from '../utils/jwt';
import Header from "./Header"; // dopasuj ścieżkę

const UserTicketList = () => {
    const [tickets, setTickets] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTickets = async () => {
            const token = localStorage.getItem('jwt');
            if (!token) {
                setError('Brak tokenu. Użytkownik nie jest zalogowany.');
                setLoading(false);
                return;
            }

            const payload = parseJwt(token);
            const uuid = payload?.userId;

            if (!uuid) {
                setError('Nieprawidłowy token JWT.');
                setLoading(false);
                return;
            }

            try {
                const res = await fetch(`http://localhost:8080/uzytkownik/${uuid}`);
                if (!res.ok) throw new Error(`Błąd API: ${res.status}`);
                const data = await res.json();
                setTickets(data);
            } catch (err) {
                console.error(err);
                setError('Wystąpił błąd podczas pobierania losów.');
            } finally {
                setLoading(false);
            }
        };

        fetchTickets();
    }, []);

    if (loading) return <p>Ładowanie losów...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (tickets.length === 0) return <p>Brak przypisanych losów.</p>;

    return (
        <div><Header header={"Panel Użytkownika"} to="/uzytkownik"/>
            <div style={{padding: '20px'}}>
                <h2>Moje Losy</h2>
                <ul>
                    {tickets.lotteryTickets.map((ticket) => (
                        <li key={ticket.id} style={{marginBottom: '15px'}}>
                            <strong>Numer:</strong> {ticket.number} <br/>
                            <strong>Kategoria:</strong> {ticket.category.name} <br/>
                            <strong>Odebrana:</strong> {ticket.isUsed ? 'Tak' : 'Nie'} <br/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
            );
            };

            export default UserTicketList;
