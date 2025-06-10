import React from 'react';
import {useNavigate} from 'react-router-dom';
import '../styles/Home.css';
import Header from "./Header";

const ManageLottery = () => {
    const navigate = useNavigate();

    const handleGenerate = async () => {
        const confirmed = window.confirm('Czy na pewno chcesz wygenerować losy?');
        if (confirmed) {
            try {
                const res = await fetch('http://localhost:8080/ticket/generate', {
                    method: 'GET'
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const base64Data = await res.text(); // if the response is raw base64

                // Convert base64 to Blob
                const byteCharacters = atob(base64Data);
                const byteArrays = [];

                for (let i = 0; i < byteCharacters.length; i += 512) {
                    const slice = byteCharacters.slice(i, i + 512);
                    const byteNumbers = new Array(slice.length);
                    for (let j = 0; j < slice.length; j++) {
                        byteNumbers[j] = slice.charCodeAt(j);
                    }
                    const byteArray = new Uint8Array(byteNumbers);
                    byteArrays.push(byteArray);
                }

                const pdfBlob = new Blob(byteArrays, {type: 'application/pdf'});

                // Open in new tab
                const pdfURL = URL.createObjectURL(pdfBlob);
                window.open(pdfURL, '_blank');
            } catch (error) {
                console.error('Failed to generate tickets:', error);
                alert('Error generating PDF. See console for details.');
            }
            console.log('Losy wygenerowane');
        }
    };


    return (
        <div><Header header ={"Administrator"} to="/administrator"/>
        <div className="home">
            <h2>Zarządzaj Loterią</h2>
            <button className="home-button" onClick={() => navigate('/administrator/zarzadzaj/kategoria')}>Dodaj kategorię losów
            </button>
            <button className="home-button" onClick={() => navigate('/administrator/zarzadzaj/nagrody')}>Dodaj nagrody</button>
            <button className="home-button" onClick={() => navigate('/administrator/zarzadzaj/listanagrod')}>Lista nagród</button>
            <button className="home-button" onClick={handleGenerate}>Wygeneruj losy</button>
        </div>
        </div>
    );
};

export default ManageLottery;
