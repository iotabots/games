import React from "react";
import Head from "next/head";
import { Container, Typography } from "@mui/material";

import Base from "../../layouts/Base";
import StakeApes from "./components/StakeApes";
import StakeLilApes from "./components/StakeLilApes";
import StakeIOTAHeros from "./components/StakeIOTAHeros";
import StakeSoonabots from "./components/StakeSoonabots";

export default function Stake() {
  return (
    <>
      <Head>
        <title>Stake</title>
        <meta
          name="description"
          content="Stake IOTABOTS or other BOTS and Friends of the Ecosystem"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base>
        <Container maxWidth="md">
          <Typography variant="h1">Stake</Typography>
          <Typography color="text.secondary" sx={{ mb: 4 }}>
            Some explanation what staking is maybe?
          </Typography>
          <StakeSoonabots />
          <StakeApes />
          <StakeLilApes />
          <StakeIOTAHeros />
        </Container>
      </Base>
    </>
  );
}
