import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header";

const TicketInfoUuid = () => {
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
                fetchIsAssigned(data.id);
            } catch (error) {
                console.error('Błąd przy pobieraniu losu:', error);
            } finally {
                setLoading(false);
            }
        };

        const fetchIsAssigned = async (id) => {
            try {
                const res = await fetch(`http://localhost:8080/ticket/isAssigned/${id}`);
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setAssigned(data);
            } catch (error) {
                console.error('Błąd przy pobieraniu danych losu:', error);
            } finally {
                setLoading(false);
            }
        }

        fetchTicket();
    }, [uuid]);

    if (loading) return <p>Ładowanie danych losu...</p>;
    if (!ticket) return <p>Nie znaleziono losu.</p>;

    return (
        <div><Header header ={"Administrator"} to="/administrator/glowne/scan"/>
            <div style={{padding: '20px'}}>
                <h2>Informacje o losie</h2>
                <p><strong>Numer losu:</strong> {ticket.number}</p>
                <p><strong>Czy jest w aplikacji:</strong> {assigned? 'tak' : 'nie'}</p>
            </div>
        </div>
    );
};

export default TicketInfoUuid;
