import React from "react";
import { Typography } from "@mui/material";
import useTokenBalance from "../hooks/useTokenBalance";
import { useWeb3React } from "@web3-react/core";

export const PoolShare = ({ lpAddress }: any) => {
  const { library, account } = useWeb3React();
  const { data } = useTokenBalance(account || "", lpAddress);
  console.log("data", data);
  return data ? (
    <Typography color="text.secondary">Data: {data.toString()}</Typography>
  ) : (
    <></>
  );
};
