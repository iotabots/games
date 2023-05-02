import React from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";

export const MatrixRain = () => {
  const rainCharacters = [];

  for (let i = 0; i < 500; i++) {
    const char = String.fromCharCode(
      0x30a0 + Math.random() * (0x30ff - 0x30a0 + 1)
    );
    const style = {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDelay: `${Math.random() * 1}s`,
      animationDuration: `${Math.random() * 1 + 0.5}s`,
    };
    rainCharacters.push(
      <Box sx={styles} key={i} className="matrixRain" style={style}>
        {char}
      </Box>
    );
  }

  return <Box>{rainCharacters}</Box>;
};

const matrixRain = keyframes`
    0% {
        opacity: 0.7;
        transform: translateY(0);
    }
    100% {
        opacity: 0;
        transform: translateY(100%);
    }
`;

const styles = {
  fontFamily: "Courier New",
  fontSize: 16,
  color: "#00ff33",
  position: "fixed",
  opacity: 0.2,
  zIndex: -1000,
  animation: `${matrixRain} 1s linear infinite`,
};
