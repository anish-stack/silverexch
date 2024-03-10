import './App.css';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home/Home';
import MakaFooter from './Components/Footer/Footer';
import GamesDetails from './Pages/GameDetails/GamesDetails';
import RulesModel from './Components/Rulesmodel.js/RulesModel';
import GamePagess from './Pages/GamePagess/GamePagess';
import ErrorPage from './Pages/Error/ErrorPage';
import AccountStatement from './Pages/AccountStatement/AccountStatement';
import ProfitLossReport from './Pages/AccountStatement/ProfitLossReport';
import BetHistory from './Pages/AccountStatement/BetHistory';
import UnsetteledMatchs from './Pages/AccountStatement/UnsetteledMatchs';
import CasinoReportHistory from './Pages/AccountStatement/Casino-Report-History';
import ChangeButtonValues from './Pages/AccountStatement/ChangeButtonValues';
import SecureAuthVerification from './Pages/AccountStatement/SecureAuthVerification';
import ChangePassword from './Pages/AccountStatement/ChangePassword';
import SignIn from './Components/Auth/SingIn';
import Betting from './Components/BettingPage/Betting'
function App() {
  const setAuthValue = sessionStorage.getItem('auth') || false;

  return (
    <BrowserRouter>
      {setAuthValue ? (
        <>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/GameInfo/:id' element={<Betting />} />
            <Route path='/Rules' element={<RulesModel />} />
            <Route path='/GamesPages/:name' element={<GamePagess />} />
            <Route path='/*' element={<ErrorPage />} />
            <Route path='/Account-Statement' element={<AccountStatement />} />
            <Route path='/Profit-Loss-Report' element={<ProfitLossReport />} />
            <Route path='/Bet-History' element={<BetHistory />} />
            <Route path='/Unsetteled-Bet' element={<UnsetteledMatchs />} />
            <Route path='/Casino-Report-History' element={<CasinoReportHistory />} />
            <Route path='/Set-Button-Values' element={<ChangeButtonValues />} />
            <Route path='/Security-Auth-Verification' element={<SecureAuthVerification />} />
            <Route path='/Change-Password' element={<ChangePassword />} />
            <Route path='/Login' element={<SignIn />} />

          </Routes>
          <MakaFooter />
        </>
      ) : (
        <SignIn/>
      )}
          <Toaster />

    </BrowserRouter>
  );
}

export default App;
