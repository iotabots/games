import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { Header } from "../components/Header";

interface Props {
  children: React.ReactNode;
}

const Base: React.FC<Props> = ({ children }) => {
  return (
    <main>
      <Box sx={styles}>
        <CssBaseline />
        <Header />
        {children}
      </Box>
    </main>
  );
};

const styles = {
  pt: "140px",
  pb: "80px",
};

export default Base;
