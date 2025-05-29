import React, { useState, useEffect } from 'react';
import '../styles/Home.css';
import '../styles/Table.css';

const PrizeList = () => {
    const [prizes, setPrizes] = useState([]);

    useEffect(() => {
        setPrizes([
            { id: 1, name: 'Telewizor 55"', amount: 3 },
            { id: 2, name: 'Odkurzacz', amount: 5 },
            { id: 3, name: 'Zestaw garnków', amount: 2 }
        ]);
    }, []);

    return (
        <div className="home center-content">
            <h2>Lista nagród</h2>
            <table className="styled-table">
                <thead>
                <tr>
                    <th>Nazwa</th>
                    <th>Ilość</th>
                </tr>
                </thead>
                <tbody>
                {prizes.map((prize, index) => (
                    <tr key={prize.id} className={index % 2 === 1 ? 'alt-row' : ''}>
                        <td>{prize.name}</td>
                        <td>{prize.amount}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrizeList;
