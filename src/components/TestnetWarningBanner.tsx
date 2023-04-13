import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import { NavLink } from "react-router-dom";

const TestnetWarningBanner = () => {
  return (
    <Alert severity="warning">
      <AlertTitle>Testnet Warning</AlertTitle>
      The NFTs and games on this site are currently on the testnet and will NOT be carried over to the mainnet. Do NOT trade real tokens for testnet assets. All ownership will be reset according to snapshots. For more information,{' '}
      <NavLink to="/info" style={{ textDecoration: 'underline' }}>
        click here
      </NavLink>
      .
    </Alert>
  );
};

export default TestnetWarningBanner;