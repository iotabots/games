import React, { useState, useEffect } from "react";
import { ethers } from "ethers";
import NftStakeArtifact from "../../../contracts/NftStake.json";
import NftArtifact from "../../../contracts/IERC721.json";
import { StakedNFTs } from "./StakedNFTs";
import { useWeb3React } from "@web3-react/core";
import TEST_SOONABOTS_ABI from "../../../contracts/iotabots_abi.json";
import { ADDRESSES } from "../../../contracts/addresses";

import {
  Box,
  Typography,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";

const nftStakeAddress = "0x83a612E70A505012F7E38e4b8f37C806f2ef7Aa8";
export const NftStake = () => {
  const [nftStake, setNftStake] = useState<any>(null);
  const [tokenId, setTokenId] = useState(0);

  const [selectedTokenId, setSelectedTokenId] = useState("");
  const [balance, setBalance] = useState(0);
  const [earned, setEarned] = useState(0);
  const [message, setMessage] = useState("");
  const [bots, setBots] = useState<Array<any>>([]);
  const [gameContract, setGameContract] = useState<any>(null);

  const { active, account, library, activate, deactivate, chainId } =
    useWeb3React();
  useEffect(() => {
    if (library && account) {
      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      const nftStakeContract = new ethers.Contract(
        nftStakeAddress,
        NftStakeArtifact.abi,
        signer
      );
      setNftStake(nftStakeContract);
      fetchBalance(signer.getAddress());

      console.log("nfts", bots);
      loadBots();
    }
  }, [library, account]);

  async function loadBots() {
    // await connect();
    const provider = new ethers.providers.Web3Provider(library.provider);
    let contract = new ethers.Contract(
      ADDRESSES.soonabotsAddr,
      TEST_SOONABOTS_ABI,
      provider
    );
    console.log("contract", contract);
    console.log("account", account);

    const data = await contract.walletOfOwner(account);
    console.log("data:", data);
    const items: Array<any> = await Promise.all(
      data.map(async (i: any) => {
        let token_index = i.toNumber();

        const metadata_url = await contract.tokenURI(token_index);

        let obj = {
          tokenId: token_index,
          url: metadata_url,
        };
        return obj;
      })
    );

    setBots(items);
  }

  const fetchBalance = async (address: any) => {
    if (nftStake) {
      const balance = await nftStake.getStakeContractBalance(address);
      setBalance(balance.toString());
    }
  };
  const stakeNFT = async () => {
    if (nftStake && selectedTokenId) {
      try {
        const provider = new ethers.providers.Web3Provider(library.provider);
        const signer = provider.getSigner();
        const soonabotsContract = new ethers.Contract(
          ADDRESSES.soonabotsAddr,
          NftArtifact.abi,
          signer
        );
        await soonabotsContract.approve(nftStakeAddress, selectedTokenId);
        const result = await nftStake.stakeNFT([selectedTokenId]);
        setMessage(`🎉 Successfully staked NFT with ID ${selectedTokenId}!`);
        console.log("NFT staked:", result);
        await result.wait();
        loadBots();
      } catch (error: any) {
        setMessage(`❌ Error staking NFT: ${error.message}`);
        console.error("Error staking NFT:", error);
      }
    }
  };

  const handleTokenSelect = (e: any) => {
    setSelectedTokenId(e.target.value);
  };

  return (
    <Box>
      <Typography variant="h4">Stake Soonabots 🤖</Typography>
      <Box>
        <Typography variant="body1">
          POOL balance: <strong>{balance} EGGS</strong>
        </Typography>
      </Box>
      <StakedNFTs contract={nftStake} />
      <Typography variant="body1">
        Stake your Soonabots and earn rewards! The longer you stake, the more
        you earn. 🚀
      </Typography>

      <FormControl fullWidth>
        <InputLabel htmlFor="tokenSelect">Select your NFT</InputLabel>
        <Select
          labelId="tokenSelect"
          value={selectedTokenId}
          onChange={handleTokenSelect}
        >
          <MenuItem value="">
            <em>-- Select a token --</em>
          </MenuItem>
          {bots?.map((nft: any) => (
            <MenuItem key={nft.tokenId} value={nft.tokenId}>
              {nft.tokenId}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box>
        <Button variant="contained" onClick={stakeNFT}>
          Stake NFT
        </Button>
      </Box>

      {message && <Typography variant="body1">{message}</Typography>}
    </Box>
  );
};
