import React from "react";
import { Inter } from "next/font/google";

import { Box, CssBaseline } from "@mui/material";

import { Header } from "../components/Header";
import { Network } from "../components/Network";

interface Props {
  hero?: React.ReactNode;
  children: React.ReactNode;
}

const inter = Inter({ subsets: ["latin"] });

const Base: React.FC<Props> = ({ children, hero }) => {
  return (
    <main className={inter.className}>
      <Box sx={styles} className={hero ? "hero" : ""}>
        <CssBaseline />
        <Header />
        {hero}
        {children}
        <Network />
      </Box>
    </main>
  );
};

const styles = {
  pb: "80px",
  pt: "140px",

  "&.hero": {
    pt: 0,
  },
};

export default Base;
