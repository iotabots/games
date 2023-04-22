import type { AppProps } from "next/app";

import { Web3Provider } from "@ethersproject/providers";
import { Web3ReactProvider } from "@web3-react/core";

import { ThemeProvider } from "@mui/material";

import { IdentityProvider } from "../providers/Identity";
import { THEME } from "../theme";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const getLibrary = (provider: any): Web3Provider => {
    const library = new Web3Provider(provider);
    library.pollingInterval = 1000;
    return library;
  };

  return (
    <ThemeProvider theme={THEME}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <IdentityProvider>
          <Component {...pageProps} />
        </IdentityProvider>
      </Web3ReactProvider>
    </ThemeProvider>
  );
}
