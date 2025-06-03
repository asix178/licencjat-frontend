import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header";
import {parseJwt} from "../utils/jwt";

const TicketInfoUUIDUser = () => {
    const { uuid } = useParams();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [assigned, setAssigned] = useState(false);


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

    const handleAddTicket = async () => {
        const token = localStorage.getItem('jwt');
        if (!token) {
            alert('Brak tokenu użytkownika.');
            return;
        }

        const payload = parseJwt(token);
        const userId = payload?.userId;

        if (!userId || !ticket?.id) {
            alert('Brakuje danych do wysłania.');
            return;
        }

        try {
            const res = await fetch('http://localhost:8080/uzytkownik/addTicket', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    userId: userId,
                    ticketId: ticket.id,
                }),
            });

            if (res.ok) {
                alert('Los został przypisany do użytkownika.');
            } else {
                const msg = await res.text();
                alert(`Błąd: ${msg}`);
            }
        } catch (err) {
            console.error('Błąd podczas przypisywania losu:', err);
            alert('Wystąpił błąd.');
        }
    };


    if (loading) return <p>Ładowanie danych losu...</p>;
    if (!ticket) return <p>Nie znaleziono losu.</p>;

    return (
        <div><Header header ={"Użytkownik"} to="/uzytkownik/scan"/>
            <div style={{padding: '20px'}}>
                <h2>Informacje o losie</h2>
                <p><strong>Numer losu:</strong> {ticket.number}</p>
                <p><strong>Nagroda odebrana:</strong> {ticket.isUsed ? 'tak' : 'nie'}</p>
                <button className="home-button" onClick={handleAddTicket}>
                    Dodaj
                </button>
            </div>
        </div>
    );
};

export default TicketInfoUUIDUser;
