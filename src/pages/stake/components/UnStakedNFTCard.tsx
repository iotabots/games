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
import { StakeButton } from "./StakeButton";
import { ADDRESSES } from "../../../contracts/addresses";

interface NftProps {
  tokenId: number;
  url: string;
  staked?: boolean;
}
interface Props {
  stakeAddress: string;
  nft: NftProps;
}
export const UnStakedNFTCard: React.FC<Props> = (props) => {
  const { nft, stakeAddress } = props;

  const { account } = useWeb3React();

  useEffect(() => {}, [account, nft]);

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
        {account && <StakeButton nft={nft} stakeAddress={stakeAddress} />}
      </CardContent>
    </Card>
  );
};
