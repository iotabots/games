import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { StakedNFTCard } from "./StakedNFTCard";

export const StakedNFTs = ({ contract }: any) => {
  const { account } = useWeb3React();
  const [stakedNFTs, setStakedNFTs] = useState<any>([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!contract) return;
    if (!account) return;
    console.log("contract NFTs:", contract);
    const getStakedNFTs = async () => {
      try {
        const stakedNFTs = await contract.getStakedNFTsByOwner(account);
        let array: any = [];
        stakedNFTs.forEach((nft: any) => {
          array.push(nft.toNumber());
        });
        setStakedNFTs(array);
      } catch (error) {
        console.error("Error getting staked NFTs:", error);
      }
    };
    getStakedNFTs();
  }, [account, contract]);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Your Staked NFTs
      </Typography>
      {stakedNFTs.length === 0 ? (
        <>
          <Typography>No staked NFTs found.</Typography>
        </>
      ) : (
        <Box style={{ display: "flex", flexWrap: "wrap" }}>
          {stakedNFTs.map((tokenId: any) => {
            return <StakedNFTCard key={tokenId} contract={contract} tokenId={tokenId} />;
          })}
          {message && <Typography variant="body1">{message}</Typography>}
        </Box>
      )}
    </Box>
  );
};
