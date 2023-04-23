import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import IERC721Enumerable from "../../../contracts/IERC721Enumerable.json";
import IERC721Metadata from "../../../contracts/IERC721Metadata.json";
import { ethers } from "ethers";
import axios from "axios";
import { getStakedNFTs, loadNfts } from "./utils";
import { UnStakedNFTCard } from "./UnStakedNFTCard";

const NFT_ADDR = "0xA1C16Aa93572326bCE72b923c1e27A35166876c3";
const NFT_STAKING_ADDR = "";

export const StakeIOTAHeros = () => {
  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();

  const [nfts, setNfts] = useState<any>([]);
  const [stakedNfts, setStakedNfts] = useState<any>([]);

  useEffect(() => {
    if (active && account) {
      loadNfts(library, NFT_ADDR, account).then((data) => {
        console.log("nfts", data);
        loadMetadata(data);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, account]);

  async function loadMetadata(_nfts: Array<any>) {
    const provider = new ethers.providers.Web3Provider(library.provider);

    let contract_Metadata = new ethers.Contract(
      NFT_ADDR,
      IERC721Metadata.abi,
      provider
    );

    let array = [];

    for (let index = 0; index < _nfts.length; index++) {
      const token_index = _nfts[index].tokenId;
      
      
      let obj = {
        tokenId: token_index,
        url: "https://api.iotaheroes.com/hero/image/" + token_index + ".png",
      };
      array.push(obj);
    }
    setNfts(array);
  }

  return (
    <div>
      <Typography variant="h4">Stake Apes</Typography>
      <Typography variant="h6">Coming soon...</Typography>
      <hr />
      <Grid container spacing={1}>
        {nfts.length > 0 &&
          nfts.map((a: any, index: number) => {
            return (
              <div key={a.tokenId}>
                <div key={index}>
                  {account && (
                    <UnStakedNFTCard stakeAddress={NFT_STAKING_ADDR} nft={a} />
                  )}
                </div>
              </div>
            );
          })}
      </Grid>
    </div>
  );
};
