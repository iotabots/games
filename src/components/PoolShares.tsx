import React from "react";
import { Typography } from "@mui/material";
import useTokenBalance from "../hooks/useTokenBalance";
import { useWeb3React } from "@web3-react/core";
import { PoolShare } from "./PoolShare";

export const PoolShares = () => {
  const { library, account } = useWeb3React();
  const SHIMMERSEA_EGGS_LP = "0x49042C23f4399D3b085039F3E262a7A3Ad7344C4";
  const IOTABEE_EGGS_LP = "0x4E01ee025E944161Da3Ed9a6557BDfbAeA2E5D6D";
  return (
    <>
      {account && (
        <>
          <Typography variant="h2">Pool Shares</Typography>
          <Typography variant="h5">ShimmerSea EGGS Pool</Typography>
          <PoolShare lpAddress={SHIMMERSEA_EGGS_LP} />
          <Typography variant="h5">IotaBee EGGS Pool</Typography>
          <PoolShare lpAddress={IOTABEE_EGGS_LP} />
        </>
      )}
    </>
  );
};
