import Head from "next/head";
import React from "react";
import Base from "../../layouts/Base";
import { Container, Typography } from "@mui/material";
import { NftStake } from "./components/NftStake";
import { StakeApes } from "./components/StakeApes";
import { StakeLilApes } from "./components/StakeLilApes";
import { StakeIOTAHeros } from "./components/StakeIOTAHeros";

export default function Stake() {
  return (
    <>
      <Head>
        <title>Stake</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">Stake</Typography>
          <NftStake />
          <StakeApes />
          <StakeLilApes />
          <StakeIOTAHeros />
        </Container>
      </Base>
    </>
  );
}
