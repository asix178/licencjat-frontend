import React, {useState, useEffect} from 'react';
import '../styles/Home.css';
import '../styles/Table.css';
import Header from "./Header";

const PrizeList = () => {
    const [prizes, setPrizes] = useState([]);

    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const res = await fetch('http://localhost:8080/prize/count');
                if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
                const data = await res.json();
                setPrizes(data);
            } catch (error) {
                console.error('Failed to fetch prize counts:', error);
            }
        };

        fetchCounts();
    }, []);

    return (
        <div><Header header={"Administrator"} to="/administrator/zarzadzaj"/>
            <div className="home center-content">
                <h2>Lista nagród</h2>
                {Object.keys(prizes).length === 0 ? (
                    <p>Ładowanie lub brak nagród</p>
                ) : (
                    <table className="styled-table">
                        <thead>
                        <tr>
                            <th>Nazwa</th>
                            <th>Ilość</th>
                        </tr>
                        </thead>
                        <tbody>
                        {Object.entries(prizes).map(([category, count], index) => (
                            <tr key={category} className={index % 2 === 1 ? 'alt-row' : ''}>
                                <td>{category}</td>
                                <td>{count}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default PrizeList;
