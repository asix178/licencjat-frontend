import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header";

const TicketInfoUuid = () => {
    const { uuid } = useParams();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);

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
    if (!ticket) return <p>Nie znaleziono losu.</p>;

    return (
        <div><Header header ={"Administrator"}/>
            <div style={{padding: '20px'}}>
                <h2>Informacje o losie (UUID)</h2>
                <p><strong>Numer losu:</strong> {ticket.number}</p>
                <p><strong>Czy jest w aplikacji:</strong> {ticket.isUsed ? 'tak' : 'nie'}</p>
            </div>
        </div>
    );
};

export default TicketInfoUuid;
