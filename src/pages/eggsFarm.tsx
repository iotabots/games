import Head from "next/head";
import Base from "../layouts/Base";
import { Button, Container, Typography } from "@mui/material";
import Hero from "../components/Hero";
import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";

export default function EggsFarm() {
  const [loading, setLoading] = useState(false);
  const { account, library } = useWeb3React();

  const [winner, setWinner] = useState({ message: "" });

  async function buyToken() {
    try {
      setWinner({ message: "" });
      setLoading(true);

      const provider = new ethers.providers.Web3Provider(library.provider);
      const signer = provider.getSigner();
      // let contract = new ethers.Contract(
      //   ADDRESSES.iotabotsGameAddr,
      //   GAME.abi,
      //   signer
      // );

      // let tx = await contract.buy("1", account, "bot_id", {
      //   value: ethers.utils.parseEther("1"),
      // });

      // let recipe = await tx.wait();

      // console.log("recipe", recipe);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  }

  return (
    <>
      <Head>
        <title>Info</title>
        <meta name="description" content="EGGS Farm" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base
        hero={
          <Hero image="https://cdn.discordapp.com/attachments/420674357652750367/1099385876334772244/IMG-20230406-WA0002.png" />
        }
      >
        <Container maxWidth="md">
          <Typography variant="h1" gutterBottom>
            EGGS Farm 🥚🤖
          </Typography>
          <Typography variant="body1" gutterBottom>
            Coming soon...
          </Typography>
          {/* {account && <Button onClick={() => buyToken()}>buy Token</Button>} */}
        </Container>
      </Base>
    </>
  );
}
