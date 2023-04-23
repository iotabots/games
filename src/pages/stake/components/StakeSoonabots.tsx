import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import IERC721Enumerable from "../../../contracts/IERC721Enumerable.json";
import IERC721Metadata from "../../../contracts/IERC721Metadata.json";
import { ethers } from "ethers";
import axios from "axios";

import { ADDRESSES } from "../../../contracts/addresses";
import { StakeButton } from "./StakeButton";

import { getStakedNFTs, loadNfts } from "./utils";
import { UnStakedNFTCard } from "./UnStakedNFTCard";
import { StakedNFTCard } from "./StakedNFTCard";

export const StakeSoonabots = () => {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();
  const [nfts, setNfts] = useState<any>([]);
  const [stakedNfts, setStakedNfts] = useState<any>([]);

  useEffect(() => {
    if (active && account) {
      loadNfts(library, ADDRESSES.soonabotsAddr, account).then((data) => {
        console.log("nfts", data);
        setNfts(data);
      });
      getStakedNFTs(library, ADDRESSES.soonabotsStakeAddr, account).then(
        (data) => {
          console.log("staked nfts", data);
          setStakedNfts(data);
        }
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account]);
  
  return (
    <div>
      <Typography variant="h4">Soonabots Staking</Typography>
      <Typography variant="h6">Coming soon...</Typography>
      <hr />
      <Grid container spacing={1}>
        {stakedNfts.length > 0 &&
          stakedNfts.map((a: any, index: number) => {
            return (
              <div key={index}>
                {account && (
                  <StakedNFTCard
                    stakeAddress={ADDRESSES.soonabotsStakeAddr}
                    nft={a}
                  />
                )}
              </div>
            );
          })}
        {nfts.length > 0 &&
          nfts.map((a: any, index: number) => {
            return (
              <div key={index}>{account && <UnStakedNFTCard stakeAddress={ADDRESSES.soonabotsStakeAddr} nft={a} />}</div>
            );
          })}
      </Grid>
    </div>
  );
};
