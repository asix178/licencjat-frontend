import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header";
import {parseJwt} from "../utils/jwt";

const TicketInfoUuidVolunteer = () => {
    const { uuid } = useParams();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const res = await fetch(`http://localhost:8080/ticket/uuid/${uuid}`);
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setTicket(data);
            } catch (error) {
                console.error('Błąd przy pobieraniu losu:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTicket();
    }, [uuid]);

    if (loading) return <p>Ładowanie danych losu...</p>;
    if (error) return <p style={{ color: 'red' }}>{error}</p>;
    if (!ticket) return <p>Nie znaleziono losu.</p>;

    const useTicket = async () => {
        try {
            const token = localStorage.getItem('vol_jwt');
            if (!token) {
                setError('Brak tokenu. Użytkownik nie jest zalogowany.');
                setLoading(false);
                return;
            }

            const payload = parseJwt(token);
            const uuid = payload?.volunteerId;

            if (!uuid) {
                setError('Nieprawidłowy token JWT.');
                setLoading(false);
                return;
            }

            const res = await fetch(`http://localhost:8080/ticket/isUsed/${ticket.id}/volunteer/${uuid}`, {
                method: 'PUT'
            });

            if (!res.ok) {
                throw new Error(`Błąd API: ${res.status}`);
            }

            // Update local state
            setTicket(prev => ({
                ...prev,
                isUsed: true
            }));

        } catch (error) {
            console.error('Błąd podczas oznaczania losu jako użyty:', error);
            alert("Wystąpił błąd. Sprawdź konsolę.");
        }
    };

    return (
        <div><Header header ={"Wolontariusz"} to="/wolontariusz/scan"/>
            <div style={{padding: '20px'}}>
                <h2>Informacje o losie</h2>
                <h3 style={{color : "red"}}><strong>Nagroda:</strong> {ticket.prize.name}</h3>
                <p><strong>Numer losu:</strong> {ticket.number}</p>
                <p><strong>Kategoria:</strong> {ticket.category.name}</p>
                <p><strong>Odebrana:</strong> {ticket.isUsed ? 'tak' : 'nie'}</p>
                <button className="home-button" onClick={useTicket} disabled={ticket.isUsed}>
                    Nagroda Wydana
                </button>
            </div>
        </div>
    );
};

export default TicketInfoUuidVolunteer;
