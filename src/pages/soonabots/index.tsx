import Head from "next/head";
import React from "react";
import Base from "../../layouts/Base";
import { Container, Typography } from "@mui/material";
import Hero from "../../components/Hero";
import { GAMES } from "../../mocks/games";
import { SoonabotRacing } from "./components/SoonabotRacing";

export default function Soonabots() {
  return (
    <>
      <Head>
        <title>Soonabots</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Base hero={<Hero image={GAMES[1].image} />}>
        <Container maxWidth="md">
          <Typography variant="h1">Soonabots</Typography>
          <SoonabotRacing />
        </Container>
      </Base>
    </>
  );
}