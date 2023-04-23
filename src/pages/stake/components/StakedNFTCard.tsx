import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  TextField,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import NftStakeArtifact from "../../../contracts/NftStake.json";
import { ADDRESSES } from "../../../contracts/addresses";

interface NftProps {
  tokenId: number;
  url: string;
}
interface Props {
  stakeAddress: string;
  nft: NftProps;
}
export const StakedNFTCard: React.FC<Props> = (props) => {
  const { stakeAddress, nft } = props;
  const { account, library } = useWeb3React();
  const [message, setMessage] = useState("");
  const [earned, setEarned] = useState(-1);
  const [nftStake, setNftStake] = useState<any>(null);

  useEffect(() => {
    if (account && library && !nftStake) {
      console.log("NFT tokenId:", nft.tokenId);
      console.log("NFT stakeAddress:", stakeAddress);
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const nftStakeContract = new ethers.Contract(
        stakeAddress,
        NftStakeArtifact.abi,
        signer
      );

      setNftStake(nftStakeContract);
      console.log("nftnftnft:", nft);
    }
    const intervalId = setInterval(() => {
      fetchEarned();
    }, 1000 * 5) // in milliseconds
    return () => clearInterval(intervalId)
  }, [account, nft]);

  const fetchEarned = async () => {
    console.log("test");
    console.log("test bft", nft);
    console.log("test nftStake", nftStake);
    try {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const nftStakeContract = new ethers.Contract(
        stakeAddress,
        NftStakeArtifact.abi,
        signer
      );
      const earnedAmount = await nftStakeContract.getCurrentStakeEarned(
        nft.tokenId
      );
      console.log("testq");
      setEarned(earnedAmount.toString());
      console.log("earnedAmount", earnedAmount.toString());
    } catch (error: any) {
      setMessage(`❌ Error fetching earned rewards: ${error.message}`);
      console.error("Error fetching earned rewards:", error);
    }
  };
  const unStakeNFT = async () => {
    if (nftStake && nft.tokenId) {
      try {
        const result = await nftStake.unStakeNFT(nft.tokenId);
        setMessage(`🎉 Successfully unstaked NFT with ID ${nft.tokenId}!`);
        console.log("NFT unstaked:", result);
      } catch (error: any) {
        setMessage(`❌ Error unstaking NFT: ${error.message}`);
        console.error("Error unstaking NFT:", error);
      }
    }
  };

  const harvest = async () => {
    if (nftStake) {
      try {
        const result = await nftStake.harvest(nft.tokenId);
        setMessage(
          `🎉 Successfully harvested rewards for NFT with ID ${nft.tokenId}!`
        );
        console.log("Harvested rewards:", result);
        setEarned(0);
      } catch (error: any) {
        setMessage(`❌ Error harvesting rewards: ${error.message}`);
        console.error("Error harvesting rewards:", error);
      }
    }
  };

  return (
    <Card
      sx={{
        width: "200px",
      }}
    >
      <CardMedia
        height="100px"
        width={"100px"}
        component="img"
        image={nft?.url}
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          Soonabot #{nft?.tokenId}
        </Typography>
        <Typography variant="body1">
          earned: {ethers.utils.formatEther(earned)} EGGS
        </Typography>
        <Button variant="contained" color="success" onClick={() => harvest()}>
          Harvest
        </Button>
        <Button variant="contained" color="error" onClick={() => unStakeNFT()}>
          Unstake
        </Button>
        {message && <Typography variant="body1">{message}</Typography>}
      </CardContent>
    </Card>
  );
};
