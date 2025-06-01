import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Administrator from './components/Administrator';
import { Routes, Route } from 'react-router-dom';
import ManageLottery from "./components/ManageLottery";
import MainDraw from "./components/MainDraw";
import AddCategory from "./components/AddCategory";
import AddPrize from "./components/AddPrize";
import PrizeList from "./components/PrizeList";
import FindTicket from "./components/FindTicket";
import TicketInfo from "./components/TicketInfo";
import Scan from "./components/Scan";
import TicketInfoUuid from "./components/TicketInfoUuid";


const App = () => {
    return (

            <div className="app">
                <Routes>
                    <Route path="/administrator" element={<Administrator />} />
                    <Route path="/administrator/zarzadzaj" element={<ManageLottery />} />
                    <Route path="/administrator/glowne" element={<MainDraw />} />
                    <Route path="/administrator/zarzadzaj/kategoria" element={<AddCategory />} />
                    <Route path="/administrator/zarzadzaj/nagrody" element={<AddPrize />} />
                    <Route path="/administrator/zarzadzaj/listanagrod" element={<PrizeList />} />
                    <Route path="/administrator/glowne/wpisz-numer" element={<FindTicket />} />
                    <Route path="/administrator/glowne/bilet/:number" element={<TicketInfo />} />
                    <Route path="/administrator/glowne/bilet/id/:uuid" element={<TicketInfoUuid />} />
                    <Route path="/administrator/glowne/scan" element={<Scan />} />
                </Routes>
            </div>

    );
};

export default App;
