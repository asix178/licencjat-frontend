import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "./Header";

const TicketInfo = () => {
    const { number } = useParams();
    const [ticket, setTicket] = useState(null);
    const [loading, setLoading] = useState(true);
    const [assigned, setAssigned] = useState(false);

    useEffect(() => {
        const fetchTicket = async () => {
            try {
                const res = await fetch(`http://localhost:8080/ticket/number/${number}`);
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setTicket(data);
                fetchIsAssigned(data.id);
            } catch (error) {
                console.error('Błąd przy pobieraniu danych losu:', error);
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
        };

        fetchTicket();
    }, [number]);

    const handleSetWinner = async () => {
        if (!ticket?.id) {
            alert('Brak ID losu.');
            return;
        }

        try {
            const res = await fetch(`http://localhost:8080/ticket/winner/${ticket.id}`, {
                method: 'PUT',
            });

            if (res.ok) {

            } else {
                const msg = await res.text();
                alert(`Błąd: ${msg}`);
            }
        } catch (err) {
            console.error('Błąd przy ustawianiu zwycięzcy:', err);
            alert('Wystąpił błąd.');
        }
    };


    if (loading) return <p>Ładowanie danych losu...</p>;
    if (!ticket) return <p>Nie znaleziono losu o numerze {number}.</p>;

    return (
        <div><Header header ={"Administrator"} to="/administrator/glowne/wpisz-numer"/>
            <div style={{padding: '20px'}}>
                <h2>Informacje o losie</h2>
                <p><strong>Numer losu:</strong> {ticket.number}</p>
                <p><strong>Czy jest w aplikacji:</strong> {assigned ? 'tak' : 'nie'}</p>
                <button className="home-button" onClick={handleSetWinner}>
                    Ustaw jako zwycięzcę
                </button>

            </div>
        </div>
    );
};

export default TicketInfo;
