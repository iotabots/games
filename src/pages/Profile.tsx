import Head from "next/head";
import React from "react";
import Base from "../layouts/Base";
import { Container, Typography } from "@mui/material";
import { PoolShares } from "../components/PoolShares";
import { useWeb3React } from "@web3-react/core";
import Link from "next/link";

export default function Profile() {
  const { library, account } = useWeb3React();

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Your IOTABOTS and other NFTs" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">Profile</Typography>
          {account && <PoolShares />}
          <Link href={"/market"}>🥚</Link>
          <Link href={"/quests"}>🥚</Link>
        </Container>
      </Base>
    </>
  );
}
