import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import useTokenBalance from "../hooks/useTokenBalance";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import { ADDRESSES } from "../contracts/addresses";
import TokenABI from "../contracts/Token.json";

export const PoolShare = ({ lpAddress }: any) => {
  const { library, account } = useWeb3React();
  const [balance, setBalance] = useState("0");
  const [totalSupply, setTotalSupply] = useState("0");
  const [shares, setShares] = useState("0");

  useEffect(() => {
    if (account) {
      fetchBalance();
    }
    console.log("PoolShare", lpAddress);
  }, [lpAddress]);

  const fetchBalance = async () => {
    const provider = new ethers.providers.Web3Provider(library.provider);
    const contract = new ethers.Contract(lpAddress, TokenABI, provider);
    let _balance = await contract.balanceOf(account);
    console.log("balance", _balance);
    setBalance(ethers.utils.formatEther(_balance));
    let _totalSupply = await contract.totalSupply();
    setTotalSupply(ethers.utils.formatEther(_totalSupply));
    const c = Number(_balance.mul(100).div(_totalSupply)) / 100;

    setShares((c).toString());
  };

  return balance ? (
    <>
      <Typography color="text.secondary">Balance: {balance}</Typography>
      <Typography color="text.secondary">totalSupply: {totalSupply}</Typography>
      <Typography color="text.secondary">shares: {shares}%</Typography>
    </>
  ) : (
    <></>
  );
};
