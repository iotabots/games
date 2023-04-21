import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import TestnetWarningBanner from './components/TestnetWarningBanner'

import Home from './pages/Home'
import Iotabots from './pages/Iotabots'
import Spacebots from './pages/Spacebots'
import Soonabots from './pages/Soonabots'
import Profile from './pages/Profile'
import Stake from './pages/Stake'
import Info from './pages/Info'

import './App.css';

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import { theme } from './components/Theme';
import {MatrixRain} from './components/MatrixRain';
import Connect from './components/wallet/Connect';

function getLibrary(provider: any) {
  return new Web3(provider)
}


export default function App() {

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <div style={{ position: "relative", overflow: "hidden", minHeight: "100vh" }}>
      <MatrixRain />
      {/* Your other components */}
        <TestnetWarningBanner />
        <Connect />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="iotabots" element={<Iotabots />} />
          <Route path="spacebots" element={<Spacebots />} />
          <Route path="soonabots" element={<Soonabots />} />
          <Route path="stake" element={<Stake />} />
          <Route path="profile" element={<Profile />} />
          <Route path="info" element={<Info />} />
        </Routes>
        <Footer />
    </div>
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

