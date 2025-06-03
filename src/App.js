import React from 'react';
import './styles/App.css';
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
import Home from "./components/Home";
import Volunteer from "./components/Volunteer";
import User from "./components/User";
import ScanVolunteer from "./components/ScanVolunteer";
import FindTicketVolunteer from "./components/FindTicketVolunteer";
import TicketInfoUuidVolunteer from "./components/TicketInfoUUIDVolunteer";
import TicketInfoVolunteer from "./components/TicketInfoVolunteer";
import ScanUser from "./components/ScanUser";
import FindTicketUser from "./components/FindTicketUser";
import UserTicket from "./components/UserTicket";
import TicketInfoUser from "./components/TicketInfoUser";
import TicketInfoUUIDUser from "./components/TicketInfoUUIDUser";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";
import AdminLogin from "./components/AdminLogin";
import VolunteerLogin from "./components/VolunteerLogin";
import VolunteerRegister from "./components/VolunteerRegister";


const App = () => {
    return (

            <div className="app">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/wolontariusz" element={<Volunteer />} />
                    <Route path="/uzytkownik" element={<User />} />
                    <Route path="/uzytkownik/logowanie" element={<UserLogin />} />
                    <Route path="/uzytkownik/rejestracja" element={<UserRegister />} />
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
                    <Route path="/wolontariusz/scan" element={<ScanVolunteer />} />
                    <Route path="/wolontariusz/wpisz-numer" element={<FindTicketVolunteer />} />
                    <Route path="/wolontariusz/bilet/:number" element={<TicketInfoVolunteer />} />
                    <Route path="/wolontariusz/bilet/id/:uuid" element={<TicketInfoUuidVolunteer />} />
                    <Route path="/uzytkownik/scan" element={<ScanUser />} />
                    <Route path="/uzytkownik/wpisz-numer" element={<FindTicketUser />} />
                    <Route path="/uzytkownik/moje-losy" element={<UserTicket />} />
                    <Route path="/uzytkownik/bilet/:number" element={<TicketInfoUser />} />
                    <Route path="/uzytkownik/bilet/id/:uuid" element={<TicketInfoUUIDUser />} />
                    <Route path="/administrator/logowanie" element={<AdminLogin />} />
                    <Route path="/wolontariusz/logowanie" element={<VolunteerLogin />} />
                    <Route path="/wolontariusz/rejestracja" element={<VolunteerRegister />} />

                </Routes>
            </div>

    );
};

export default App;
