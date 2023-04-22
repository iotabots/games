import Head from "next/head";
import React from "react";
import Base from "../layouts/Base";
import { Container, Typography } from "@mui/material";
import { PoolShares } from "../components/PoolShares";
import { useWeb3React } from "@web3-react/core";

export default function Profile() {
  const { library, account } = useWeb3React();

  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">Profile</Typography>
          {account && <PoolShares />}
        </Container>
      </Base>
    </>
  );
}
