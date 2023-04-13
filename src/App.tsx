import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom";

import Navigation from './components/Navigation'
import Footer from './components/Footer'
import TestnetWarningBanner from './components/TestnetWarningBanner'

import Home from './pages/Home'
import Games from './pages/Games'
import Spacebots from './pages/Spacebots'
import Soonabots from './pages/Soonabots'
import Profile from './pages/Profile'
import Info from './pages/Info'

import './App.css';

import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'

function getLibrary(provider: any) {
  return new Web3(provider)
}


export default function App() {

  const theme = createTheme({
    typography: {
      fontFamily: 'coder',
    },
    palette: {
      primary: {
        light: '#757ce8',
        main: '#2b2b2b',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#ff7961',
        main: '#f44336',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={theme}>
        <Navigation />
        <TestnetWarningBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="games" element={<Games />} />
          <Route path="spacebots" element={<Spacebots />} />
          <Route path="soonabots" element={<Soonabots />} />
          <Route path="profile" element={<Profile />} />
          <Route path="info" element={<Info />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </Web3ReactProvider>
  );
}

