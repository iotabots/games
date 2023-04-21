import React from "react";

export const MatrixRain = () => {
  const rainCharacters = [];

  for (let i = 0; i < 500; i++) {
    const char = String.fromCharCode(0x30a0 + Math.random() * (0x30ff - 0x30a0 + 1));
    const style = {
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDelay: `${Math.random() * 1}s`,
      animationDuration: `${Math.random() * 1 + 0.5}s`,
    };
    rainCharacters.push(
      <span key={i} className="matrixRain" style={style}>
        {char}
      </span>
    );
  }

  return <>{rainCharacters}</>;
};
