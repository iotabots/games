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
import { ethers } from "ethers";

export const StakedNFTCard = ({ contract, tokenId }: any) => {
  const { account } = useWeb3React();
  const [stakedNFTs, setStakedNFTs] = useState<any>([]);
  const [message, setMessage] = useState("");
  const [earned, setEarned] = useState(0);

  useEffect(() => {
    if (!contract) return;
    if (!account) return;
    console.log("contract NFTs:", contract);
    console.log("NFT tokenId:", tokenId);
    fetchEarned();
  }, [account, contract, tokenId]);

  const fetchEarned = async () => {
    if (contract) {
      const earnedAmount = await contract.getCurrentStakeEarned(tokenId);
      setEarned(earnedAmount.toString());
    }
  };
  const unStakeNFT = async () => {
    if (contract && tokenId) {
      try {
        const result = await contract.unStakeNFT(tokenId);
        setMessage(`🎉 Successfully unstaked NFT with ID ${tokenId}!`);
        console.log("NFT unstaked:", result);
      } catch (error: any) {
        setMessage(`❌ Error unstaking NFT: ${error.message}`);
        console.error("Error unstaking NFT:", error);
      }
    }
  };

  const harvest = async () => {
    if (contract) {
      try {
        const result = await contract.harvest(tokenId);
        setMessage(
          `🎉 Successfully harvested rewards for NFT with ID ${tokenId}!`
        );
        console.log("Harvested rewards:", result);
      } catch (error: any) {
        setMessage(`❌ Error harvesting rewards: ${error.message}`);
        console.error("Error harvesting rewards:", error);
      }
    }
  };

  return (
    <Box
      key={tokenId}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Card>
        <CardContent>
          <Typography variant="body1">Token ID: {tokenId}</Typography>
          <Typography variant="body1">
            earned: {ethers.utils.formatEther(earned)} EGGS
          </Typography>
          <Button variant="contained" color="success" onClick={() => harvest()}>
            Harvest
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => unStakeNFT()}
          >
            Unstake
          </Button>
          {message && <Typography variant="body1">{message}</Typography>}
        </CardContent>
      </Card>
    </Box>
  );
};
