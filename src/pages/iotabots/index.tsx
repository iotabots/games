import React, { useEffect, useState } from "react";
import Head from "next/head";
import axios from "axios";

import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

import IOTABOTS_ABI from "../../contracts/iotabots_abi.json";
import TOKEN from "../../contracts/Token.json";

import { Container, Typography, Box } from "@mui/material";

import Base from "../../layouts/Base";
import { ADDRESSES } from "../../contracts/addresses";
import TotalBurnedTokens from "../../components/TotalBurnedTokens";
import BurnTokens from "../../components/BurnTokens";
import Leaderboard from "../../components/Leaderboard";
import Balance from "./components/Balance";
import Bot from "./components/Bot";
import BotLoading from "./components/BotLoading";
import { GAMES } from "../../mocks/games";
import Hero from "../../components/Hero";
import Rules from "./components/Rules";

interface Bot {
  attributes: Array<object>;
  date: number;
  description: string;
  dna: string;
  edition: number;
  image: string;
  name: string;
}

export default function Iotabots() {
  const { active, account, library } = useWeb3React();

  const [playerTokens, setPlayerTokens] = useState<string | null>(null);
  const [tokenSupply, setTokenSupply] = useState<string | null>(null);
  const [bots, setBots] = useState<Array<any>>([]);

  async function loadGame() {
    const provider = new ethers.providers.Web3Provider(library.provider);

    let token = new ethers.Contract(ADDRESSES.eggsAddr, TOKEN, provider);
    let playerTokenBanlance = await token.balanceOf(account);
    playerTokenBanlance = ethers.utils.formatEther(playerTokenBanlance);
    let totalSupply = await token.totalSupply();
    totalSupply = ethers.utils.formatEther(totalSupply);
    setTokenSupply(totalSupply);
    setPlayerTokens(playerTokenBanlance);

    let botsTokenBanlance = await token.balanceOf(ADDRESSES.iotabotsAddr);
    botsTokenBanlance = ethers.utils.formatEther(botsTokenBanlance);
  }

  async function loadBots() {
    const provider = new ethers.providers.Web3Provider(library.provider);
    let contract = new ethers.Contract(
      ADDRESSES.iotabotsAddr,
      IOTABOTS_ABI,
      provider
    );

    const data = await contract.walletOfOwner(account);

    const items: Array<Bot> = await Promise.all(
      data.map(async (i: any) => {
        let token_index = i.toNumber();
        const metadata_url = await contract.tokenURI(token_index);
        const metadata = await axios.get(metadata_url);

        return metadata.data;
      })
    );

    setBots(items);
  }

  useEffect(() => {
    if (account && library.provider) {
      loadBots();
      loadGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account, library]);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base hero={<Hero image={GAMES[0].image} />}>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              gap: 4,
              flexWrap: "wrap",
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" sx={{ mb: 1 }}>
                Rock, Paper, Scissors
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                Play now against your IOTABOTS and collect EGGS from wining
                Rock, Paper, Scissors against them. Good luck!
              </Typography>
              {account && library.provider && (
                <Balance
                  playerBalance={playerTokens}
                  totalSupply={tokenSupply}
                  account={account}
                />
              )}
              <Box sx={{ textAlign: "center" }}>
                {bots &&
                  bots.map(({ image, name, edition }, index) => (
                    <Bot
                      key={index}
                      id={edition}
                      image={image}
                      name={name}
                      refetchGame={loadGame}
                    />
                  ))}
                {!bots && <BotLoading />}
              </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
              <Rules />
            </Box>
          </Box>
        </Container>

        <Container sx={{ mt: 6 }} maxWidth="md">
          <Box
            sx={{
              bgcolor: "primary.main",
              borderRadius: 2,
              boxShadow: 1,
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: 4,
                p: 4,
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4">Burn EGG Tokens</Typography>
                <Typography>
                  You can either burn or sell your tokens. By burning them you
                  participate in the Leaderboard below.
                </Typography>
              </Box>
              <Box>
                <TotalBurnedTokens tokenAddress={ADDRESSES.eggsAddr} />
              </Box>
            </Box>
            <BurnTokens
              contractAddress={ADDRESSES.eggsBurnAddr}
              tokenContractAddress={ADDRESSES.eggsAddr}
            />
          </Box>

          {/* LEADERBOARD */}
          <Box sx={{ my: 6 }}>
            <Typography variant="h3" sx={{ mb: 1 }}>
              Leaderboard
            </Typography>
            <Typography color="text.secondary" sx={{ mb: 3 }}>
              These are the honorful top 10 burners. Go a head and burn some
              yourself to show up here.
            </Typography>
            {active && (
              <Leaderboard contractAddress={ADDRESSES.eggsBurnAddr} top={10} />
            )}
          </Box>

          {/* HOW IT WORKS */}
          <Box>
            <Typography gutterBottom variant="h4">
              How it works
            </Typography>
            <Typography gutterBottom variant="h5">
              EGGS Token Burning Process
            </Typography>
            <Typography color="text.secondary">
              Burning EGGS tokens permanently removes a specified amount of
              tokens from circulation, reducing the total supply. This action is
              irreversible.
            </Typography>
            <Typography mt={2} gutterBottom variant="h6">
              Step 1: Approve the contract
            </Typography>
            <Typography color="text.secondary">
              Before burning tokens, you need to approve the smart contract to
              transfer the specified amount of EGGS tokens on your behalf. This
              is a security measure implemented in the ERC20 standard to ensure
              that you maintain control over your tokens.
            </Typography>
            <Typography color="text.secondary">
              By approving the contract, you grant permission for the smart
              contract to transfer a specific amount of tokens from your
              account. This allowance can be changed at any time by approving a
              new amount.
            </Typography>
            <Typography mt={2} gutterBottom variant="h6" component="h6">
              Step 2: Burn tokens
            </Typography>
            <Typography color="text.secondary">
              After approving the contract, you can proceed to burn the tokens.
              Clicking the "Burn Tokens" button will send a transaction to the
              smart contract, which will transfer the specified amount of tokens
              to a designated "dead" address. This action effectively removes
              the tokens from circulation.
            </Typography>
            <Typography color="text.secondary">
              Please note that burning tokens is an irreversible action. Once
              burned, the tokens cannot be recovered.
            </Typography>
          </Box>
        </Container>
      </Base>
    </>
  );
}

const styles = {};