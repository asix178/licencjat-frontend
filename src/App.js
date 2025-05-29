import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import ManageLottery from "./components/ManageLottery";
import MainDraw from "./components/MainDraw";
import AddCategory from "./components/AddCategory";
import AddPrize from "./components/AddPrize";
import PrizeList from "./components/PrizeList";


const App = () => {
    return (

            <div className="app">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/zarzadzaj" element={<ManageLottery />} />
                    <Route path="/glowne" element={<MainDraw />} />
                    <Route path="/zarzadzaj/kategoria" element={<AddCategory />} />
                    <Route path="/zarzadzaj/nagrody" element={<AddPrize />} />
                    <Route path="/zarzadzaj/listanagrod" element={<PrizeList />} />
                </Routes>
            </div>

    );
};

export default App;
