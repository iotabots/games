import React from "react";
import { Box } from "@mui/material";
import useBlockNumber from "../../hooks/useBlockNumber";

export const BlockNumber = () => {
  const { data } = useBlockNumber();
  return <Box>Block #{data}</Box>;
};
